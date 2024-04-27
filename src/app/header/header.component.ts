import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from "../services/auth.service"
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;
  constructor(private router:Router, public authService: UserService) {

  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(res=>{
      this.isLoggedIn = res; // Use the value emitted by isLoggedIn$
    })
  }

  logout() {
    this.authService.logout();
    this.authService.isLoggedIn$.next(false);
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
