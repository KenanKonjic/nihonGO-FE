import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router) {
  }

  isLoggedIn: boolean = false;

  checkLoginStatus() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
  navigateToHome(): void{
    this.router.navigate([
      ''
    ])
  }
  navigateToLogin(): void{
    this.router.navigate([
      'login'
    ])
  }
  navigateToSignup(): void{
    this.router.navigate([
      'signup'
    ])
  }

}
