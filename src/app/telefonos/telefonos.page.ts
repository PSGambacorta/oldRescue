import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-telefonos',
  templateUrl: './telefonos.page.html',
  styleUrls: ['./telefonos.page.scss'],
})
export class TelefonosPage {
  panico: number;
  constructor(private alertController: AlertController, private router: Router) {
      this.panico = 0;
  }

  getPanico(){
    return this.panico;
  }
  

}
