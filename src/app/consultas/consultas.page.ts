import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage {

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

  async LlamarTurnos(){
    console.log('FIAT es lo mejor "TURNOS"', this.opcionSeleccionada1, this.opcionSeleccionada2, this.opcionSeleccionada3);
    window.open(`tel:138`, '_system');
  }
}
