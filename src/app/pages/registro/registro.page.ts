import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Region } from 'src/app/models/region';
import { Comuna } from 'src/app/models/comuna';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  regForm?: FormGroup
  email: string = "";
  contrasena: string = "";
  username: string = "";
  confirmarContrasena: string = "";

  regiones: Region[] = [];
  comunas: Comuna[] = [];
  idRegion: number = 0;

  constructor( public authService: AuthService,
    private locationService: LocationService, public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController, public router: Router
  ) { }

  ngOnInit() {
    this.cargarRegiones();

    /*
    patrones para validar el formulario
    this.regForm = this.formBuilder.group({
      fullname: ['', [Validators.required]], email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("(?=.*\d(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z])
      ]]
      
    })
    */
  }

  async cargarRegiones() {
    const request = await this.locationService.getRegion();
    this.regiones = request.data;
  }

  async cargarComunas() {
    const request = await this.locationService.getComuna(this.idRegion);
    this.comunas = request.data;
  }

  /* metodos para registrar usuario
  get errorControl() {
    return this.regForm?.controls;
  }
  */


  async registro() {
    if (this.contrasena != this.confirmarContrasena) {
      // agregar toast para mostrar error
    } else if (this.contrasena == this.confirmarContrasena) {
      this.authService.register(this.email, this.contrasena)
        .then(() => {
          this.authService.guardarUsuario(this.email, this.username);
        })
        .then(() => {
          this.router.navigate(['/login']);
        })
        .catch((err) => {
          // agregar toast para mostrar error
          console.log(err.message);
        });
    }
  }

}

