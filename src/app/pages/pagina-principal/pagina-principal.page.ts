import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {

  constructor(public authService : AuthService, public router : Router) { }

  ngOnInit() {
  }

  async logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
