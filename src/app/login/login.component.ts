import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const isLoggedin = this.authService.login(this.username, this.password);
    if (isLoggedin) {
      this.router.navigate([
        'profile'
      ])
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
