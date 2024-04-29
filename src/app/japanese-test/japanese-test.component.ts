import { Component, OnInit } from '@angular/core';
import { JapaneseTestService } from '../services/japanese-test.service';
import { JapaneseTestQuestion } from '../models/japanese-test-question.model';

@Component({
  selector: 'app-japanese-test',
  templateUrl: './japanese-test.component.html',
  styleUrls: ['./japanese-test.component.css']
})
export class JapaneseTestComponent implements OnInit {
  testQuestions: JapaneseTestQuestion[] = [];
  userAnswers: string[] = new Array(10).fill('');
  testResult: number | null = null;

  constructor(private japaneseTestService: JapaneseTestService) {}

  ngOnInit(): void {
    this.japaneseTestService.generateTest().then(questions => {
      this.testQuestions = questions;
    });
  }

  submitTest(): void {
    let correctAnswers = 0;
    for (let i = 0; i < this.testQuestions.length; i++) {
      if (this.testQuestions[i].answer === this.userAnswers[i]) {
        correctAnswers++;
      }
    }
    this.testResult = (correctAnswers / this.testQuestions.length) * 100;
  }
}
