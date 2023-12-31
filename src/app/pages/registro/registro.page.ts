import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Region } from 'src/app/models/region';
import { Comuna } from 'src/app/models/comuna';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  regForm?: FormGroup

  username: string = "";
  email: string = "";
  contrasena: string = "";

  confirmarContrasena: string = "";

  regiones: Region[] = [];
  comunas: Comuna[] = [];
  idRegion: number = 0;

  constructor(public authService: AuthService,
    private locationService: LocationService, public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController, public router: Router, public helper: HelperService
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

    // primero comprobamos si los campos estan vacios

    if (this.email === "" || this.contrasena === "" || this.username === ""
      || this.confirmarContrasena === "") {

      this.helper.mostrarAlerta("Campo vacio");

    } else {

      // comprobar si los campos tienen almenos 7 digitos
      if (this.email.length >= 8 && this.contrasena.length >= 8 && this.username.length >= 8 && this.confirmarContrasena.length >= 8) {

        this.helper.mostrarAlerta("Todos los campos tienen al menos 8 caracteres o dígitos.");
        if (this.contrasena === this.confirmarContrasena) {

          this.authService.register(this.email, this.contrasena)
            .then(() => {
              this.authService.guardarUsuario(this.email, this.username);
            })
            .then(() => {
              this.router.navigate(['/login']);
            })
            .catch((err) => {
              if (err.code == "auth/email-already-in-use") {
                this.helper.mostrarAlerta("El correo ya esta en uso");
              }
              if (err.code == "auth/invalid-email") {
                this.helper.mostrarAlerta("El correo es invalido");
              }
            });

        } else {
          this.helper.mostrarAlerta("las contraseñas no coinciden");
        }
      } else {
        this.helper.mostrarAlerta("Alguno de los campos no cumple con la longitud mínima requerida");
      }
    }
  }

}

