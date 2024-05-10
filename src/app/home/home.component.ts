import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router:Router, private userService: UserService) {
  }

  ngOnInit() {
    // @ts-ignore
    const username = localStorage.getItem('username').toString();

    this.userService.searchUserByUsername(username)
      .subscribe(user => {
        if (!user.hasTakenTest) {
          this.router.navigate(['test']);
        }
      });
  }

  navigateToHiragana(): void{
    this.router.navigate([
      'hiragana'
    ])
  }
  navigateToKatakana(): void{
    this.router.navigate([
      'katakana'
    ])
  }
  navigateToVocab(): void{
    this.router.navigate([
      'vocab'
    ])
  }
  navigateToGrammar(): void{
    this.router.navigate([
      'grammar'
    ])
  }
  navigateToCulture(): void{
    this.router.navigate([
      'culture'
    ])
  }
  navigateToReading(): void{
    this.router.navigate([
      'reading'
    ])
  }

  navigateToChat() {
    this.router.navigate([
      'chat'
    ])
  }
}
