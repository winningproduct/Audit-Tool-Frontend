import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Evidence } from '@shared/models/evidence';
import { EvidenceApiService } from '@shared/services/api/evidence.service';

@Component({
  selector: 'app-evidence-history-box',
  templateUrl: './evidence-history-box.component.html',
  styleUrls: ['./evidence-history-box.component.scss']
})
export class EvidenceHistoryBoxComponent implements OnInit {
  @Input() evidence: any;
  sub: any;
  @Input() productId: number;
  @Input() questionId: number;

  constructor(
    private authService: AuthService,
    private evidenceService: EvidenceApiService
  ) { }
  
  ngOnInit() {
    console.log(this.productId);
  }

  async save() {
    const evidence = new Evidence();
    evidence.productId = this.productId;
    evidence.userId = await this.authService.getCurrentUserId();
    evidence.content = this.evidence.content;
    evidence.version = this.evidence.version;
    evidence.status = this.evidence.status;
    try {
      console.log(evidence);
      this.evidenceService.post(this.questionId, evidence);
    } catch (error) {
      console.log(error);
    }
  }

}
