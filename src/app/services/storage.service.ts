import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const storageUsuario = "usuarioData";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async getItem(llave: string):Promise<string | null> {
    const obj = await Preferences.get({ key: llave });
    return obj.value;
  }

  async setItem(llave: string, valor: string):Promise<void> {
    await Preferences.set({ key: llave, value: valor });
  }

  async agregarUsuario(usuario: any[]) {
    await this.setItem(storageUsuario, JSON.stringify(usuario));
  }

}
