import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public fireAuth: AngularFireAuth) { }



  async login(email: string, password: string) {
    return await this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    return await this.fireAuth.createUserWithEmailAndPassword(email, password);
  }


  async logout() {
    return await this.fireAuth.signOut();
  }

  async reestablecer(email: string) {
    return await this.fireAuth.sendPasswordResetEmail(email);
  }

  async guardarUsuario(email: string, username: string) {
    initializeApp(environment.firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, 'users');
    addDoc(colRef, {
      email: email,
      username: username
    })
  }

  async obtenerUsuario() {
    initializeApp(environment.firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, 'users');
    getDocs(colRef)
      .then((snapshot) => {
        let usuarios: { [x: string]: any; }[] = [];
        snapshot.forEach((doc) => {
          usuarios.push({ ...doc.data() });
        })
        console.log(usuarios);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }
}