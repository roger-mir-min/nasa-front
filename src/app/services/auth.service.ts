import { Injectable, inject } from '@angular/core';
import { User, UserForLogin, UserForSignup } from '../models/interfaces';
import { BehaviorSubject, Observable, Subscription, catchError, of, tap, throwError } from 'rxjs';
import { rootEndpoint } from '../models/endpoints';
import { HttpClient } from '@angular/common/http';
import { dummyPhyto } from '../models/phyto-dummy';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  //Subscription for currentUser
  currentUser: User | null = null; //current logged in user
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  subscUser: Subscription = this.currentUser$.subscribe(res => this.currentUser = res);

  constructor() { }
  
  login(formValue: UserForLogin) {
    alert('usuari introduït: ' + formValue.email + ' i ' + formValue.password);
    this.currentUserSubject.next({name:'Pau', phytoplankton:dummyPhyto, email: 'aaa@aa.com', password:'asdf'});
    return of(''); //prova
    //recorda posar tipus de la funció
    // return this.http.post<User>(rootEndpoint + `login`, { email: formValue['inputEmail'], password: formValue['inputKey'] }).pipe(
    //   tap((user: User) => {
    //       this.currentUserSubject.next(user); //phyto-state service ho rep i actualitza phyto-state
    //       console.log("New user logged in.");
    //       // this.navAfterLogin();
        
    //   }),
    //     catchError((error) => {
    //       if (error.status === 400) {
    //         console.log(error);
    //       } else {
    //         alert('Error inesperat. Si us plau, intenti-ho més tard.');
    //       }
    //       return throwError(() => new Error(error));
    //   })
    // );
  }

  signup(userFormValue: UserForSignup): Observable<any> {
    alert('Signup amb: ' + userFormValue.name + userFormValue.email +  userFormValue.password + userFormValue.phytoplanktonName);
    return of('');
    //al component s'haurà de navegar a login component
    // return this.http.post(rootEndpoint + `signup`, userFormValue).pipe(
    //   catchError((error) => {
    //     if (error.status === 400) {
    //       console.log(error);
    //     } else {
    //       alert('Error inesperat. Si us plau, intenti-ho més tard.');
    //     }
    //     return throwError(() => new Error(error));
    //   })
    // );
  }

}
