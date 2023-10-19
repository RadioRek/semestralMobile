import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  // Esto todavia no lo vamos a ocupar
  [x: string]: any;
  loginForm?: FormGroup;
  // Esto todavia no lo vamos a ocupar

  email: string = "";
  contrasena: string = "";
  loading: boolean = true;

  helper: HelperService = new HelperService();
  constructor(private router: Router, public authService: AuthService) { }

  cargaFake = () => {
    this.loading = false;
  }

  ngOnInit() {
    setTimeout(this.cargaFake, 500);
    /*
    this['regForm'] = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("(?=.*\d(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z])
      ]]

    })
    get errorControl() {
      return this.loginForm?.controls;
    }
    */
  }

  async login() {
    this.authService.login(this.email, this.contrasena).then((res) => {
      this.router.navigate(['/pagina-principal']);
    }).catch((error) => {
      if (error.code == "auth/invalid-email") {
        this.helper.mostrarAlerta("El correo ingresado no es valido");
      } else if (error.code == "auth/invalid-login-credentials") {
        this.helper.mostrarAlerta("El correo o la contraseña son incorrectos");
      } else {
        this.helper.mostrarAlerta("Ocurrio un error inesperado");
      }
    })
  }
}


