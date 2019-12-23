import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { PhaseApiService } from 'src/app/shared/services/api/phase.api.service';
import { Phase } from 'src/app/shared/models/phase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-phases',
  templateUrl: './view-phases.component.html',
  styleUrls: ['./view-phases.component.scss']
})
export class ViewPhasesComponent implements OnInit {
  faEllipsisV = faEllipsisV;
  id:number;
  private sub: any;

  constructor(private phaseApiService :PhaseApiService,
              private route: ActivatedRoute) { }

  phases : Phase[];

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['productId']; 
      console.log(this.id);
​      this.getAllPhases(this.id);
   });
  }

  async getAllPhases(id:number){
    this.phases = await this.phaseApiService.get(id);
  }

}
