import { HttpClient } from '@angular/common/http';
import { Injectable, inject, OnInit } from '@angular/core';
import { phytoState, SolvedActivity, SolvedActivityResult } from '../models/interfaces';
import { rootEndpoint, sendResultsEndpoint } from '../models/endpoints';
import { catchError, switchMap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { ModalService } from './modal.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class phytoStateService {
  private http = inject(HttpClient);
  private modalService = inject(ModalService);
  private router = inject(Router);
  private authService = inject(AuthService);

  phytoStateSubj = new BehaviorSubject<phytoState>({ name: '', health: 100, co2Consumed: 100, reproductions: 0, inSymbiosis:false });
  phytoState$ = this.phytoStateSubj.asObservable();
  


  sendResults(solvedActivity: SolvedActivity) {
    //s'envia solució, es retorna nou estat que s'assigna a this.phytoState
    // this.http.put<phytoState>(rootEndpoint + sendResultsEndpoint, {id:this.authService.currentUser, action:solvedActivity.action, answer:solvedActivity.userAnswer}).pipe(
    //   catchError(error => {
    //     console.error('Error:', error);
    //     return throwError(() => error);
    //   })).subscribe(res => {
    //     this.phytoStateSubj.next(res); //després es navega a dashboard
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
    this.modalService.openModal(modalTitle, modalText, solvedActivity.action);
  
    this.router.navigate(['dashboard']);

  }

  constructor() { }

  OnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.phytoStateSubj.next({
        health: user!.phytoplankton.health,
        co2Consumed: user!.phytoplankton.co2Consumed,
        reproductions: user!.phytoplankton.reproductions,
        inSymbiosis: user!.phytoplankton.inSymbiosis,
        name: user!.phytoplankton.name
      })
    })
  }
}
