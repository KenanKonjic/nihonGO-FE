import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from "../services/auth.service"
import {Subscription} from "rxjs";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(private router:Router, public authService: UserService) {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
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
  navigateToProfile(): void{
    this.router.navigate(['user-profile']);
  }

}
