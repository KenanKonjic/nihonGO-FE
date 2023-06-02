import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-katakana',
  templateUrl: './katakana.component.html',
  styleUrls: ['./katakana.component.css']
})
export class KatakanaComponent {

  constructor(private router:Router) {
  }

  navigateToKatakanaChart(): void{
    this.router.navigate([
      'katakanachart'
    ])
  }
  navigateToKatakanaQuiz(): void{
    this.router.navigate([
      'katakanaquiz'
    ])
  }
  navigateToKatakanaTest(): void{
    this.router.navigate([
      'katakanatest'
    ])
  }

}
