import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, addDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public fireAuth: AngularFireAuth, private helper : HelperService) { }



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
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  async guardarViaje(marca : string, patente : string, color : string, tarifa : number, destino : string, usuario : string) {
    initializeApp(environment.firebaseConfig);

    // primero hay que comprobar si la patente del vehiculo ya esta registrada en algun doc
    const db = getFirestore();
    const colRef = collection(db, 'viajes');
    const q = query(colRef, where("patente", "==", patente));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      this.helper.mostrarAlerta('La patente ya esta registrada para un viaje!');
    } else {
      addDoc(colRef, {
        marca: marca,
        patente: patente,
        color: color,
        tarifa: tarifa,
        destino: destino,
        usuario: usuario
      });
      this.helper.mostrarAlerta('Viaje registrado con exito!');
    }
  }

  async obtenerViajes() {
    initializeApp(environment.firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, 'viajes');
    const snapshot = await getDocs(colRef);
    const viajes: { [x: string]: any; }[] = [];
    snapshot.forEach((doc) => {
      viajes.push({ id: doc.id, ...doc.data() });
    });
    return viajes;
  }
  
  async borrarViaje(id : string) {
    initializeApp(environment.firebaseConfig);
    const db = getFirestore();
    const docRef = doc(db, 'viajes', id);
    await deleteDoc(docRef);
    if (docRef) {
      return true;
    } else {
      return false;
    }
  }

  async obtenerUsuarioActual() {
    const user = await this.fireAuth.currentUser;
    if (user) {
      return user.email;
    } else {
      return null;
    }
  }
}