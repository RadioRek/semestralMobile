import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  contrasena: string = "";
  loading: boolean = true;

  constructor(private router: Router,
    private authService: AuthServiceService
  ) { }

  cargaFake = () => {
    this.loading = false;
  }

  ngOnInit() {
    setTimeout(this.cargaFake, 2000);
  }

  login() {
    if (this.email == "admin" && this.contrasena == "admin") {
      this.router.navigate(['/pagina-principal']);
    } else {
      alert("Credeneciales no validas.");
    }
  }

}
