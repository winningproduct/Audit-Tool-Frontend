import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Evidence } from '@shared/models/evidence';
import { EvidenceApiService } from '@shared/services/api/evidence.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-evidence-history-box',
  templateUrl: './evidence-history-box.component.html',
  styleUrls: ['./evidence-history-box.component.scss']
})
export class EvidenceHistoryBoxComponent implements OnInit {
  @Input() evidence: any;
  sub: any;
  names: any[];
  @Input() productId: number;
  @Input() questionId: number;
  pipe = new DatePipe('en-US');

  constructor(
    private authService: AuthService,
    private evidenceService: EvidenceApiService
  ) { }

  ngOnInit() {
    }

  async save() {
    const evidence = new Evidence();
    evidence.productId = this.productId;
    evidence.userId = await this.authService.getCurrentUserId();
    evidence.content = this.evidence.content;
    evidence.version = this.evidence.version;
    evidence.status = this.evidence.status;
    try {
      this.evidenceService.post(this.questionId, evidence);
    } catch (error) {
    }
  }

  getEvidenceByDate(date: string) {
    const format = 'yyyy-MM-dd';
    const myFormattedDate = this.pipe.transform(this.evidence.createdDate, format, 'short');
    console.log(myFormattedDate);
  }

}
