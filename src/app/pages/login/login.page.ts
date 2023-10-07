import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LoadingController } from '@ionic/angular';

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

  constructor(private router: Router, private authService: AuthServiceService) { }

  cargaFake = () => {
    this.loading = false;
  }

  ngOnInit() {
    setTimeout(this.cargaFake, 2000);
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

    
  }
}


