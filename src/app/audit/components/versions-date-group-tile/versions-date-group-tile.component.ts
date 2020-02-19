import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-versions-date-group-tile',
  templateUrl: './versions-date-group-tile.component.html',
  styleUrls: ['./versions-date-group-tile.component.scss']
})
export class VersionsDateGroupTileComponent implements OnInit {

  @Input() date: any;
  @Input() productId: number;
  @Input() questionId: number;

  innerDates =[];
  constructor() { }

  ngOnInit() {
    this.innerDates = this.date.value;
  }

}
