import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Question } from '@shared/models/question';
import { Evidence } from '@shared/models/evidence';
import { ActivatedRoute } from '@angular/router';
import { EvidenceApiService } from '@shared/services/api/evidence.service';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import MediumEditor from 'medium-editor';
const BUTTONS = [
  'bold',
  'italic',
  'underline',

  'subscript',
  'superscript',
  'anchor',
  'quote',
  'pre',
  'orderedlist',
  'unorderedlist',
  'indent',
  'justifyLeft',
  'justifyCenter',
  'justifyRight',
  'justifyFull',
  'h1',
];
@Component({
  selector: 'app-evidence-box',
  templateUrl: './evidence-box.component.html',
  styleUrls: ['./evidence-box.component.scss'],
})
export class EvidenceBoxComponent implements OnInit, AfterViewInit {
  @Input() question: Question;
  @Input() index: number;
  @ViewChild('editable', {
    static: true,
  })
  editable: ElementRef;
  editor: any;
  evidence: Evidence[];
  productId: number;

  selectedStatus = 3;
  statusDropDowns = [
    { id: 1, value: 'Fully Complied' },
    { id: 2, value: 'Partialy Complied' },
    { id: 3, value: 'Not Complied' },
    { id: 4, value: 'Not Applicable' },
  ];

  constructor(
    private route: ActivatedRoute,
    private evidenceService: EvidenceApiService,
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.productId = +params.productId;
    });
    await this.getEvidenceByQuestionId(this.productId, this.question.id);
  }

  async getEvidenceByQuestionId(id: number, qid: number) {
    this.evidence = await this.evidenceService.get(id, qid);
    this.selectedStatus =
      this.evidence.length > 0 &&
      (
        this.statusDropDowns.find(item => {
          return item.value.includes(this.evidence[0].status);
        }) || { id: 3, value: 'Not Complied' }
      ).id;
  }

  ngAfterViewInit(): void {
    this.editor = new MediumEditor(this.editable.nativeElement, {
      paste: {
        /* This example includes the default options for paste,
           if nothing is passed this is what it used */
        forcePlainText: false,
        cleanPastedHTML: true,
        cleanReplacements: [],
        cleanAttrs: ['class', 'style', 'dir', 'name'],
        cleanTags: ['meta'],
        unwrapTags: [],
      },
      toolbar: {
        /* These are the default options for the toolbar,
             if nothing is passed this is what is used */
        allowMultiParagraphSelection: true,
        buttons: BUTTONS,
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        relativeContainer: null,
        standardizeSelectionStart: false,
        static: false,
        /* options which only apply when static is true */
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false,
      },
    });
  }

  async updateStatus(status: any) {
    const id = this.evidence[0].id;
    this.evidenceService.updateStatus(
      this.question.id,
      status.value,
      Number(id),
    );
  }
}
