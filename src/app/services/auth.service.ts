import { Injectable } from '@angular/core';
import { User } from '../models/interfaces';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Subscription for currentUser
  currentUser: User | null = null; //current logged in user
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  subscUser: Subscription = this.currentUser$.subscribe(res => this.currentUser = res);

constructor() { }

}
