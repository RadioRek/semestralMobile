import { Component, OnInit } from '@angular/core';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  email: string = "";
  contrasena: string = "";
  regiones:Region[] = [];
  comunas:Comuna[] = [];
  idRegion:number = 0;

  constructor(private locationService:LocationService) { }

  ngOnInit() {
    this.cargarRegiones();
  }

  async cargarRegiones(){
    const request = await this.locationService.getRegion();
    this.regiones = request.data;
  }

  async cargarComunas(){
    const request = await this.locationService.getComuna(this.idRegion);
    this.comunas = request.data;
  }
}
