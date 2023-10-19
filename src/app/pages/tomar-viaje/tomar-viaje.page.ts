import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tomar-viaje',
  templateUrl: './tomar-viaje.page.html',
  styleUrls: ['./tomar-viaje.page.scss'],
})
export class TomarViajePage implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit() {
  }

  async obtenerViajes() {
    this.auth.obtenerViajes();
  }

}
