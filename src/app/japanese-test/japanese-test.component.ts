import {Component, Injectable, OnInit} from '@angular/core';
import { JapaneseTestService } from '../services/japanese-test.service';
import {UserService} from "../services/auth.service";
import { JapaneseTestQuestion } from '../models/japanese-test-question.model';
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-japanese-test',
  templateUrl: './japanese-test.component.html',
  styleUrls: ['./japanese-test.component.css']
})
export class JapaneseTestComponent implements OnInit {
  testQuestions: JapaneseTestQuestion[] = [];
  userAnswers: string[] = new Array(10).fill('');
  testResult: number | null = null;
  currentQuestionIndex: number = 0;

  constructor(private japaneseTestService: JapaneseTestService, private userService: UserService) {}

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

    // @ts-ignore
    const username = localStorage.getItem('username').toString();
    const updatedUser: UserModel = {
      username: username,
      password: '',
      hasTakenTest: true
    };
    this.userService.updateUser(username, updatedUser).subscribe();
  }

  selectAnswer(answer: string): void {
    this.userAnswers[this.currentQuestionIndex] = answer;
    if (this.currentQuestionIndex < this.testQuestions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.submitTest();
    }
  }
}
