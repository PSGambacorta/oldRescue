import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TelefonosPage } from '../telefonos/telefonos.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController, private router: Router) {}

  /**
   * Dirige al usuario a la segunda pagina.
   */
  PaginaEmergencias() {
    this.router.navigate(['/emergencias']);
  }

  async BotonPanico(){
    console.log('FIAT es lo mejor "PANICO"');
    window.open(`tel:911`, '_system');
  }
}
