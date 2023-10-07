import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nasa-frontend';

  isModalVisible = false;
  modalTitle = '';
  modalText = '';

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.modalVisibility$.subscribe(data => {
      this.isModalVisible = data.visible;
      this.modalTitle = data.text1;
      this.modalText = data.text2;
    });
  }
}
