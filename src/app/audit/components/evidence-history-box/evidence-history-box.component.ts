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
  @Input() productId: number;
  @Input() questionId: number;
  evidenceId: number;
  evidence: Evidence[] = null;
  pipe = new DatePipe('en-US');

  constructor(
    private authService: AuthService,
    private evidenceService: EvidenceApiService
  ) {
    this.evidenceService.evidenceId.subscribe(id => {
      this.evidenceId = id;
      if (this.evidenceId) {
        this.getEvidence(this.evidenceId);
      }
    });
  }

  ngOnInit() {
  }

  // async save() {
  //   const evidence = new Evidence();
  //   evidence.productId = this.productId;
  //   evidence.userId = await this.authService.getCurrentUserId();
  //   evidence.content = this.evidence.content;
  //   evidence.version = this.evidence.version;
  //   evidence.status = this.evidence.status;
  //   try {
  //     this.evidenceService.post(this.questionId, evidence);
  //   } catch (error) {
  //   }
  // }

  async getEvidence(id: number) {
    this.evidence = await this.evidenceService.getEvidenceById(id);
  }

}
