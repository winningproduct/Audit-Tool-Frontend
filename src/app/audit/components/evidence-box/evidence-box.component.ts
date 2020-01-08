import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Question } from '@shared/models/question';
import { Evidence } from '@shared/models/evidence';
import { ActivatedRoute } from '@angular/router';
import { EvidenceApiService } from '@shared/services/api/evidence.service';

@Component({
  selector: 'app-evidence-box',
  templateUrl: './evidence-box.component.html',
  styleUrls: ['./evidence-box.component.scss'],
})
export class EvidenceBoxComponent implements OnInit {
  @Input() question: Question;
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
}
