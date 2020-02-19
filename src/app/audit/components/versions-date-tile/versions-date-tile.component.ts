import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EvidenceApiService } from '@shared/services/api/evidence.service';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-versions-date-tile',
  templateUrl: './versions-date-tile.component.html',
  styleUrls: ['./versions-date-tile.component.scss']
})
export class VersionsDateTileComponent implements OnInit {
  faRedo = faRedo;

  @Input() innerDate: any;
  @Input() productId: number;
  @Input() questionId: number;
  evidenceId: number;
  editDetails: any;
  pipe = new DatePipe('en-US');

  constructor(
    private evidenceService: EvidenceApiService
  ) { }

  ngOnInit() {
    this.getEvidenceByDate(this.productId, this.questionId, this.innerDate);
  }

  async getEvidenceByDate(productId: number, questionId: number, date: string) {
    const format = 'yyyy-MM-dd';
    const myFormattedDate = this.pipe.transform(date, format, 'short');
    this.editDetails = await this.evidenceService.getEvidenceVersionsByDate(productId, questionId, myFormattedDate);
  }

  revert(evidenceId: number) {
    this.evidenceService.setEvidenceId(evidenceId);
  }
}
