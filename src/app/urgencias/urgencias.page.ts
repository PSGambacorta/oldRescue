import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-urgencias',
  templateUrl: './urgencias.page.html',
  styleUrls: ['./urgencias.page.scss'],
})
export class UrgenciasPage {

  opcionSeleccionada1: string = '';
  opcionSeleccionada2: string = '';
  opcionSeleccionada3: string = '';
  resultadoSeleccion: boolean = false;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  onChangeSelect () {
    if (!this.opcionSeleccionada1 || !this.opcionSeleccionada2 || !this.opcionSeleccionada3) {
      this.resultadoSeleccion = false;
    } else {
      this.resultadoSeleccion = true;
    }   
  }

  async evaluarResultado() {
    if (this.opcionSeleccionada1 == 'opcion1-1' && 
        this.opcionSeleccionada2 == 'opcion2-1' &&
        this.opcionSeleccionada3 == 'opcion3-1') {
          await this.LlamarUrgencias();
        } else {
          this.navCtrl.navigateRoot(`/consultas`);
        }
  }

  async LlamarUrgencias(){
    console.log('FIAT es lo mejor "URGENCIAS"', this.opcionSeleccionada1, this.opcionSeleccionada2, this.opcionSeleccionada3);
    window.open(`tel:139`, '_system');
  }
}
