import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-auto',
  templateUrl: './registro-auto.page.html',
  styleUrls: ['./registro-auto.page.scss'],
})
export class RegistroAutoPage implements OnInit {
  marca : string = "";
  patente : string = "";
  color : string = "";
  tarifa : number = 0;
  destino : string = "";
  usuario : string = "";

  constructor(public auth : AuthService, public helper : HelperService,
  public router : Router) { }

  ngOnInit() {
  }

  async obtenerUsuario() {
    await this.auth.obtenerUsuarioActual().then((res) => {
      let cosa : any = res;
      this.usuario = cosa;
      console.log(this.usuario);
    })
  }

  // en terminos de validaciones, no hay validaciones equisde 
  async guardarViaje() {
    await this.obtenerUsuario()
    .then(() => {
      this.auth.guardarViaje(this.marca, this.patente, this.color, this.tarifa, this.destino, this.usuario)
      .then(() => {
        this.helper.mostrarAlerta('Viaje guardado con exito!');
        this.router.navigate(['/pagina-principal']);
      })
    }) .catch((err) => {
      this.helper.mostrarAlerta('Error loquisimo, no se que paso');
    });
  }
}
