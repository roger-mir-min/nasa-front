import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { action0, action1, action2, action3, urlAction1, urlAction2, urlAction3, urlAction4, urlAction0 } from './models/temes';

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
  modalAction = 1;
  modalPhytoImg = '';

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.modalVisibility$.subscribe(data => {
      this.isModalVisible = data.visible;
      this.modalTitle = data.text1;
      this.modalText = data.text2;
      this.modalAction = data.action;

      //es determina foto del phyto al modal segons l'acció
      if (this.modalAction == 0) { //no sé per què dona error si poso action0
        this.modalPhytoImg = urlAction0;
      } else if (this.modalAction == action1) {
        this.modalPhytoImg = urlAction1;
      } else if (this.modalAction == action2) {
        this.modalPhytoImg = urlAction2
      } else if (this.modalAction == action3) {
        this.modalPhytoImg = urlAction3
      } else {
        this.modalPhytoImg = urlAction4
      }
    });
  }
}
