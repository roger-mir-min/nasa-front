import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalVisibilitySubject = new BehaviorSubject<{visible: boolean, text1: string, text2: string}>({visible: false, text1: '', text2: ''});
  modalVisibility$ = this.modalVisibilitySubject.asObservable();

  constructor() { }

  openModal(text1: string, text2: string): void {
    this.modalVisibilitySubject.next({ visible: true, text1, text2 });
  }

  closeModal(): void {
    this.modalVisibilitySubject.next({ visible: false, text1: '', text2: '' });
  }

}

