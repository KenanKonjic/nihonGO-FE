import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppModule } from '../app.module';
import { LoginResponse } from './login-response.interface';
import { Router } from '@angular/router';
import { UserService } from "../services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token: string | undefined;
  loginForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,  public authService: UserService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;


      const payload = {
        username: username,
        password: password
      };

      this.http.post<LoginResponse>('https://nihongo-392fc332c38f.herokuapp.com/authenticate', payload)
        .subscribe(
          (response) => {
            this.token = response.token;
            localStorage.setItem('token', this.token);
            localStorage.setItem('username', username);
            localStorage.setItem('user', JSON.stringify({username: username, token: this.token}));
            this.authService.isLoggedIn$.next(true);
            this.router.navigate(['']);
          },
          (error) => {
            console.error('Login failed', error);
          }
        );


    }
  }

  navigateToSignup(): void {
    this.router.navigate([
      'signup'
    ])
  }
}
