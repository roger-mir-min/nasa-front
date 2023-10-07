import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FitoState, SolvedActivityResult } from '../models/interfaces';
import { rootEndpoint, sendResultsEndpoint } from '../models/endpoints';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FitoStateService {
  private http = inject(HttpClient);

  fitoState: FitoState = {health:0, energy:0};

  sendResults(results: SolvedActivityResult) {
    //s'envia solució, es retorna nou estat que s'assigna a this.fitoState
    this.http.put<FitoState>(rootEndpoint + sendResultsEndpoint, results).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(() => error);
      })).subscribe(res => {
        this.fitoState = { ...res };
      })
  }

constructor() { }

}
