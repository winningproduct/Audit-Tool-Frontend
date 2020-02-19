import { Component, OnInit, Input } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-versions-date-group-tile',
  templateUrl: './versions-date-group-tile.component.html',
  styleUrls: ['./versions-date-group-tile.component.scss']
})
export class VersionsDateGroupTileComponent implements OnInit {
  faCaretDown = faCaretDown;
  isCollapsed = true;

  @Input() date: any;
  @Input() productId: number;
  @Input() questionId: number;

  innerDates = [];
  constructor() { }

  ngOnInit() {
    this.innerDates = this.date.value;
  }

}
