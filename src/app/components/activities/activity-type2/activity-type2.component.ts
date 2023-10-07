import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/interfaces';

@Component({
  selector: 'app-activity-type2',
  templateUrl: './activity-type2.component.html',
  styleUrls: ['./activity-type2.component.css']
})
export class ActivityType2Component implements OnInit {
  @Input() activity!: Activity;

  constructor() { }

  ngOnInit() {
  }

}
