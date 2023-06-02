import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrls: ['./hiragana.component.css']
})
export class HiraganaComponent {
  constructor(private router:Router) {
  }

  navigateToHiraganaChart(): void{
    this.router.navigate([
      'hiraganachart'
    ])
  }
  navigateToHiraganaQuiz(): void{
    this.router.navigate([
      'hiraganaquiz'
    ])
  }
  navigateToHiraganaTest(): void{
    this.router.navigate([
      'hiraganatest'
    ])
  }
}
