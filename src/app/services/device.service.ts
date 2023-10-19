import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor( ) { }

  async geBatteryInfo(){
    const info = await Device.getBatteryInfo();
    console.log(info);
  }

  async getInfo(){
    const info = await Device.getInfo();
    return info;
  }
}
