import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public fireAuth: AngularFireAuth) { }

  
  async login(email: string, password: string) {
    return await this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  async register(email: string, password: string) {
    return await this.fireAuth.createUserWithEmailAndPassword(email, password)
  }

  async logout() {
    return await this.fireAuth.signOut()
  }

  async reestablecer(email: string) {
    return await this.fireAuth.sendPasswordResetEmail(email)
  }

}
