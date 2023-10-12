import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reestablecer-pass',
  templateUrl: './reestablecer-pass.page.html',
  styleUrls: ['./reestablecer-pass.page.scss'],
})
export class ReestablecerPassPage implements OnInit {
  email: string = "";
  constructor(public authService : AuthService) { }

  ngOnInit() {
  }

  async reestablecer() {
    this.authService.reestablecer(this.email)
      .then((res) => {
        window.alert("Se ha enviado un correo para reestablecer su contraseña")
      }).catch((error) => {
        window.alert(error.message)
      })
  
  }
 
}
