import { Component, OnInit, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dummyActivity } from 'src/app/models/dummy-activity';
import { Action } from 'src/app/models/interfaces';
import { action1, action2, action3 } from 'src/app/models/temes';
import { activityType1, activityType2, activityType3 } from 'src/app/models/activity-types';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-activity-frame',
  templateUrl: './activity-frame.component.html',
  styleUrls: ['./activity-frame.component.css']
})
export class ActivityFrameComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private activitiesService = inject(ActivitiesService);
  
  action1 = action1;
  action2 = action2;
  action3 = action3;
  activityType1 = activityType1;
  activityType2 = activityType2;
  activityType3 = activityType3;

  selectedAction: Action | '' = '';
  currentActivity = dummyActivity;

  constructor() { }

  ngOnInit() {
    this.selectedAction = this.route.snapshot.paramMap.get('action') as Action;
    this.currentActivity = this.activitiesService.getActivity(this.selectedAction);
  }

}
