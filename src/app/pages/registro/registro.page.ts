import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocationServiceService } from 'src/app/location.service.service';
import { StorageService } from 'src/app/services/storage.service';
import { Region } from 'src/app/models/region';
import { Router } from '@angular/router';
import { Comuna } from 'src/app/models/comuna';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  regForm : FormGroup

  constructor(private auth:AngularFireAuth,
    private locationService:LocationServiceService, public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService:AuthServiceService) { }

mgOnInit() {
this.regForm = this.formBuilder.group({
fullname :['', [Validators.required]], email :['', [
Validators.required,
Validators.email,
Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
]],
password:['',[
Validators.required,
Validators.pattern("(?=.*\d(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z])
]]

})
}
  email: string = "";
  contrasena: string = "";
  regiones: Region[] = [];
  comunas:Comuna[] = [];
  idRegion:number = 0;
  
  

  get errorControl(){
    return this.regForm?.controls;
  }

  async registro(){
    const loading = await this.loadingCtrl();
    await loading.present();
    if(this.regForm?.valid){
      
    }

  }
    console.log(this.regiones)

    this.cargarRegiones();

  }
  async cargarRegiones(){
    const request = await this.locationService.getRegion();
    this.regiones = request.data;
    console.log(this.regiones)
  }
  async cargarComunas(){
    const request = await this.locationService.getComuna(this.idRegion);
    this.comunas = request.data;
  }

}
