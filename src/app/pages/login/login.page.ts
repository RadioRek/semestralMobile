import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string = "";
  contrasena: string = "";
  private animation!: Animation;
  loading: boolean = true;

  constructor(private router: Router, private animationCtrl: AnimationController) { }

  cargaFake = () => {
    this.loading = false;
  }

  ngOnInit() {
    setTimeout(this.cargaFake, 2000);
  }

  login() {
    if (this.email == "admin" && this.contrasena == "admin") {
      this.router.navigate(['/pagina-principal']);
    }
  }

}
