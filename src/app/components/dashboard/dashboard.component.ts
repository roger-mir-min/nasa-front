import { Component, OnInit, inject } from '@angular/core';
import { action1, action2, action3, action4, urlState1, urlState2, urlState3, urlState4 } from '../../models/temes';
import { Action } from 'src/app/models/interfaces';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);

  user$;
  phytoImg = '';

  action1 = action1;
  action2 = action2;
  action3 = action3;
  action4 = action4;

  navigateToActivity(action: Action) {
    this.router.navigate([`activities/${action}`]);
  }

  constructor(private router: Router) {
    this.user$ = this.authService.currentUser$.pipe(tap(user => {
      if (user?.phytoplankton.health! <= 0) {
        this.phytoImg = urlState1;
      } else if (user?.phytoplankton.health! < 30) {
        this.phytoImg = urlState2;
      } else if (user?.phytoplankton.health! < 65) {
        this.phytoImg = urlState3;
      } else {
        this.phytoImg = urlState4;
      }
  }));
  }

  ngOnInit() {
  }

}
