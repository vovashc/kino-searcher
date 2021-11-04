import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    password:  ['', [
      Validators.required,
    ]],
  });
  isLogin = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void { 
    this.isLogin = this.router.url.includes("login");
  }

  onSubmit(): void {
    this.isLogin ?
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password) :
      this.authService.emailSignup(this.loginForm.value.email, this.loginForm.value.password);
  }

  navigateSignUp(): void {
    this.router.navigate([this.isLogin ? 'auth/sign-up' : 'auth/login']);
  }

}
