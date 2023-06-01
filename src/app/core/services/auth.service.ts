import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}
  registerWithEmailAndPassword(email: any, password: any) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  signInWihEmailAndPassword(user: User) {
    return this.angularFireAuth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
  }
}
