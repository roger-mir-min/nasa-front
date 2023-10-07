import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private authService = inject(AuthService);

  user$;

  constructor() {
    this.user$ = this.authService.currentUser$;
  }

  ngOnInit() {
  }

}
