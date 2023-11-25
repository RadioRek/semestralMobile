
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  async mostrarAlerta(mensaje: string) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Brroooom!';
    alert.message = mensaje;
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
    return alert;
  }

}
