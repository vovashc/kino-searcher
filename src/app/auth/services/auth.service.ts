import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  private successLoginSignup(value: any): void {
    if(value.user?.email) {
      localStorage.setItem('email', value.user.email);
    }
    this.router.navigateByUrl('/films-list');
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.successLoginSignup(value);
      })
      .catch(err => {
        this._snackBar.open(err.message);
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      this.successLoginSignup(value);
    })
    .catch(error => {
      this._snackBar.open(error.message);
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigateByUrl('/auth');
      localStorage.clear();
    });
  }
}
