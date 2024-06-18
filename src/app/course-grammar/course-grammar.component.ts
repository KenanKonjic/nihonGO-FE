import { Component, OnInit } from '@angular/core';
import { OpenAiApiService } from '../services/open-ai-api.service';
import { UserModel } from '../models/user.model';
import {UserService} from "../services/auth.service";

@Component({
  selector: 'app-course-grammar',
  templateUrl: './course-grammar.component.html',
  styleUrls: ['./course-grammar.component.css']
})
export class CourseGrammarComponent implements OnInit {
  user: UserModel;
  testResult: number;
  question: string;
  correctAnswer: string;
  wrongAnswers: string[] = [];
  userAnswer: string;
  allAnswers: string[];
  isLoading: boolean = true;

  constructor(private openAiApiService: OpenAiApiService, private userService: UserService) { }

  ngOnInit() {
    const userItem = localStorage.getItem('user');
    // @ts-ignore
    const username = localStorage.getItem('username').toString();
    if (userItem !== null) {
      this.userService.searchUserByUsername(username).subscribe(user => {
        this.testResult = user.testResult;
        console.log(this.testResult);
        this.generateQuestion();
      });
    } else {
      console.error('User not found in local storage');
    }
  }

  generateQuestion() {
    const message = `I want you to generate a JSON object that contains a question field, a correct answer field, and three wrong answer fields. The question should be a simple Japanese grammar question for a user that scored ${this.testResult}/100 on a Japanese proficiency test. The response should contain absolutely nothing other than the JSON.`;

    this.openAiApiService.getChatResponse(message).subscribe(
      (response: any) => {
        const content = JSON.parse(response.choices[0].message.content);
        console.log(content);
        this.question = content.question;
        this.correctAnswer = content.correct_answer;
        if (Array.isArray(content.wrong_answers)) {
          this.wrongAnswers = content.wrong_answers;
        } else {
          this.wrongAnswers = [content.wrong_answer1, content.wrong_answer2, content.wrong_answer3];
        }
        this.allAnswers = this.shuffleArray([this.correctAnswer, ...this.wrongAnswers]);
        this.isLoading = false;
      },
      (error) => {
        console.error('Failed to generate question:', error);
        this.isLoading = false;
      }
    );
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  submitAnswer() {
    if (this.userAnswer === this.correctAnswer) {
      alert('Correct!');
    } else {
      alert('Incorrect. The correct answer is ' + this.correctAnswer);
    }
    this.generateQuestion();
  }
}
