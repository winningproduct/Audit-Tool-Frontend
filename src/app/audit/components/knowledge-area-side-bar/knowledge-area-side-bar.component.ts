import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-knowledge-area-side-bar',
  templateUrl: './knowledge-area-side-bar.component.html',
  styleUrls: ['./knowledge-area-side-bar.component.scss']
})
export class KnowledgeAreaSideBarComponent implements OnInit {
  @Input() knowledgeAreas: any;
  @Input() productId: number;
  @Input() phaseId: number;
  @Output() knowledgeAreaName = new EventEmitter<string>();
  @Output() knowledgeAreaUrl = new EventEmitter<string>();

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.hide();
  }

  sendData(name: string, url: string) {
    this.knowledgeAreaName.emit(name);
    this.knowledgeAreaUrl.emit(url);
  }

}
