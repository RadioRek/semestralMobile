import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-tomar-viaje',
  templateUrl: './tomar-viaje.page.html',
  styleUrls: ['./tomar-viaje.page.scss'],
})
export class TomarViajePage implements OnInit {

  listaViajes : any = [];
  viajeTomado : string = '';

  constructor(public auth: AuthService, public helper : HelperService) { }

  ngOnInit() {
    this.obtenerViajes();
  }

  async obtenerViajes() {
    let valor = await this.auth.obtenerViajes();
    if (valor == null) {
      this.helper.mostrarAlerta('No hay viajes disponibles');
    } else {
      this.listaViajes = valor;
    }
  }

  async tomarViaje(id : string) {
    this.viajeTomado = id;
    console.log(this.viajeTomado);
    let valor = await this.auth.borrarViaje(this.viajeTomado);
    if (valor == null) {
      this.helper.mostrarAlerta('No se pudo tomar el viaje');
    } else {
      this.helper.mostrarAlerta('Viaje tomado');
      this.obtenerViajes();
    }
  }
}
