import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(public fireAuth : AngularFireAuth) { }

  async login(email: string, password: string) {
    
  }

  register(email: string, password: string) {
  
  }

  logout() {
  
  }

}
