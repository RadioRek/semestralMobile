import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
  loginForm : FormGroup
  
  email: string = "";
  contrasena: string = "";
  loading: boolean = true;

  constructor(private router: Router,
    public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService:AuthServiceService) { }

  cargaFake = () => {
    this.loading = false;
  }

  ngOnInit() {
    setTimeout(this.cargaFake, 2000);
    this['regForm'] = this.formBuilder.group({ email :['', [
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
      get errorControl(){
        return this.loginForm?.controls;
      }
    
      async registro(){
        const loading = await this.loadingCtrl();
        await loading.present();
        if(this.loginForm?.valid){
          
        }
    
      }

  login() {
    if (this.email == "admin" && this.contrasena == "admin") {
      this.router.navigate(['/pagina-principal']);
    }else{
      alert("Credeneciales no validas.");
    }
  }

}
function login() {
  throw new Error('Function not implemented.');
}

