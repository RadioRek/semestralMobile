import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public fireAuth : AngularFireAuth) { }

  async register(email: string, password: string) {
  return await this.ngFireAuth.createUserWithEmailAndPassword (email, password)

  }

  async login(email: string, password: string) {
  return await this.ngFireAuth.signInWithEmailAndPassword (email, password)
  }

  async reestablecer(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail (email)
    }
  async logout() {
    return await this.ngFireAuth.signOut()
  
  }

}
