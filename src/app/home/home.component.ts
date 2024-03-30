import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router) {
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
