import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from "../services/auth.service"
import {Subscription} from "rxjs";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  isLoggedIn: boolean;
  private subscription: Subscription;
  constructor(private router:Router, public authService: UserService) {

  }

  ngOnInit(): void {
    this.subscription = this.authService.isLoggedIn$.subscribe(
      (loggedIn: boolean) => {
        this.isLoggedIn = loggedIn;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout() {
    localStorage.clear();
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
