import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DeviceService } from 'src/app/services/device.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  info: any;

  constructor(public device: DeviceService, public toastController: ToastController) { }

  ngOnInit() {
    this.presentToast();
  }

  async getInfo() {
    this.info = await this.device.getInfo();
  }

  async presentToast() {
    await this.getInfo();
    if (this.info['operatingSystem'] == "ios") {
      const toast = await this.toastController.create({
        message: 'Enserio usas un iphone? que mal...',
        duration: 5000,
        position: 'bottom',
      });
      await toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Mientras mas abierto sea el sistema operativo, mejor',
        duration: 5000,
        position: 'bottom',
      });
      await toast.present();
    }
  }
}
