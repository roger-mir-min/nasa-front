import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { ActivitiesService } from '../../../services/activities.service';
import { Activity } from 'src/app/models/interfaces';
import { dummyActivity } from 'src/app/models/dummy-activity';
import { FitoStateService } from 'src/app/services/fito-state.service';

@Component({
  selector: 'app-activity-type1',
  templateUrl: './activity-type1.component.html',
  styleUrls: ['./activity-type1.component.css']
})
export class ActivityType1Component implements OnInit {
  private fitoStateService = inject(FitoStateService);

  @Input() activity: Activity = dummyActivity;
  //crear un botó per cada element de activity.statement[1-...]

  checkAnswer(answer: string) {
    if (answer == this.activity.solution[0]) {
      this.fitoStateService.sendResults({ ...this.activity, userAnswer: [answer], points: true });
    } else {
      this.fitoStateService.sendResults({ ...this.activity, userAnswer: [answer], points: false });
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
