import { Component, OnInit, Input } from '@angular/core';
import { Question } from '@shared/models/question';

@Component({
  selector: 'app-evidence-box',
  templateUrl: './evidence-box.component.html',
  styleUrls: ['./evidence-box.component.scss'],
})
export class EvidenceBoxComponent implements OnInit {
  @Input() question: Question;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
