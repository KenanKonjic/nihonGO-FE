import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      psw: ['', Validators.required]
    });
  }

  signup() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const psw = this.loginForm.get('psw')?.value;
      const payload = {
        username: username,
        password: psw,
      };

      this.http.post<string>('https://space-shuffle.herokuapp.com/signup', payload)
        .subscribe(
          (response) => {
            console.log('Registration successful', response);
            this.router.navigate(['/login']);
          },
          (error) => {
            console.error('Registration failed', error);
          }
        );
    }
  }
  navigateToLogin(): void{
    this.router.navigate([
      'login'
    ])}
}
