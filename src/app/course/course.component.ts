import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private router:Router) {
  }
    navigateToGrammarLesson(): void{
      this.router.navigate([
        'course-grammar'
      ])
    }
    navigateToVocabularyLesson(): void{
      this.router.navigate([
        'course-vocabulary'
      ])
    }
    navigateToReadingLesson(): void{
      this.router.navigate([
        'course-reading'
      ])
    }

}
