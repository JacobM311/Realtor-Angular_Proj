import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<firebase.User | null>;
  public user$: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.userSubject = new BehaviorSubject<firebase.User | null>(null);
    this.user$ = this.userSubject.asObservable();

    this.afAuth.authState.subscribe(user => {
      this.userSubject.next(user);
    });
  }

  get isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  login(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(userCredential => {
      this.userSubject.next(userCredential.user);
    });
  }

  logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      this.userSubject.next(null);
    });
  }
}
