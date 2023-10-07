import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FitoState, SolvedActivity, SolvedActivityResult } from '../models/interfaces';
import { rootEndpoint, sendResultsEndpoint } from '../models/endpoints';
import { catchError, switchMap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { ModalService } from './modal.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FitoStateService {
  private http = inject(HttpClient);
  private modalService = inject(ModalService);
  private router = inject(Router);
  private authService = inject(AuthService);

  fitoStateSubj = new BehaviorSubject({ health: 100, energy: 100 });
  fitoState$= this.fitoStateSubj.asObservable();

  sendResults(solvedActivity: SolvedActivity) {
    //s'envia solució, es retorna nou estat que s'assigna a this.fitoState
    // this.http.put<FitoState>(rootEndpoint + sendResultsEndpoint, {id:this.authService.currentUser, action:solvedActivity.action, answer:solvedActivity.userAnswer}).pipe(
    //   catchError(error => {
    //     console.error('Error:', error);
    //     return throwError(() => error);
    //   })).subscribe(res => {
    //     this.fitoStateSubj.next(res);
    //   })

    //segons si la resposta és correcta o no obrim modal amb un text o altre
    //AIXÒ HAURÀ D'ANAR DINS DEL SUBSCRIBE QUAN UNIM AMB BACKEND
    let modalTitle = '';
    let modalText = solvedActivity.extraInfo;
    if (solvedActivity.points == true) {
      modalTitle = 'Resposta correcta!';
    } else {
      modalTitle = 'Llàstima!';
    }
    this.modalService.openModal(modalTitle, modalText);
  
    this.router.navigate(['dashboard']);

  }

  constructor() { }
}
