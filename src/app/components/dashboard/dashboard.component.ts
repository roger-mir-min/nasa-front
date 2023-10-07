import { Component, OnInit } from '@angular/core';
import { action1, action2, action3 } from '../../models/temes';
import { Action } from 'src/app/models/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  action1 = action1;
  action2 = action2;
  action3 = action3;

  navigateToActivity(action: Action) {
    this.router.navigate([`activities/${action}`]);
  }

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
