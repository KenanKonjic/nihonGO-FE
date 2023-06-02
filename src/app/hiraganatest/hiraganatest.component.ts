import {Component, OnInit} from '@angular/core';
import { timer, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hiraganatest',
  templateUrl: './hiraganatest.component.html',
  styleUrls: ['./hiraganatest.component.css']
})
export class HiraganatestComponent implements OnInit {
  hiraganaCharacters: string[] = [
    'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も','や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん',
    'が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'じ', 'ず', 'で', 'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
  ];

  pronunciations: string[] = [
    'a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to',
    'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'n',
    'ga', 'gi', 'gu', 'ge', 'go', 'za', 'ji', 'zu', 'ze', 'zo', 'da', 'ji', 'zu', 'de', 'do', 'ba', 'bi', 'bu', 'be', 'bo', 'pa', 'pi', 'pu', 'pe', 'po',
  ];

  totalQuestions: number = 20;
  passingScore: number = 80;
  questionReview: any[] = [];
  testStarted: boolean = false;
  testFinished: boolean = false;
  currentQuestionIndex: number = 0;
  currentSymbol: string = '';
  userAnswer: string = '';
  questionsAnswered: number = 0;
  correctAnswers: number = 0;
  timerSubscription: Subscription | undefined;
  timeRemaining: number = 180; // 3 minutes in seconds

  ngOnInit(): void {}

  startTest(): void {
    this.testStarted = true;
    this.generateNextQuestion();
    this.startTimer();
  }

  submitAnswer(): void {
    const correctAnswer = this.getPronunciation(this.currentSymbol);
    const isCorrect = this.userAnswer.toLowerCase() === correctAnswer;

    this.questionReview.push({
      symbol: this.currentSymbol,
      userAnswer: this.userAnswer,
      correctAnswer: correctAnswer,
      correct: isCorrect
    });

    if (isCorrect) {
      this.correctAnswers++;
    }

    this.userAnswer = '';
    this.questionsAnswered++;

    if (this.questionsAnswered === this.totalQuestions || this.timeRemaining === 0) {
      this.finishTest();
    } else {
      this.generateNextQuestion();
    }
  }

  skipQuestion(): void {
    this.questionReview.push({
      symbol: this.currentSymbol,
      userAnswer: 'Skipped',
      correctAnswer: this.getPronunciation(this.currentSymbol),
      correct: false
    });

    this.userAnswer = '';
    this.questionsAnswered++;

    if (this.questionsAnswered === this.totalQuestions || this.timeRemaining === 0) {
      this.finishTest();
    } else {
      this.generateNextQuestion();
    }
  }

  finishTest(): void {
    this.testFinished = true;
    this.stopTimer();
  }

  generateNextQuestion(): void {
    const randomIndex = Math.floor(Math.random() * this.hiraganaCharacters.length);
    this.currentSymbol = this.hiraganaCharacters[randomIndex];
    this.currentQuestionIndex++;
  }

  getPronunciation(character: string): string {
    const index = this.hiraganaCharacters.indexOf(character);
    return this.pronunciations[index];
  }

  startTimer(): void {
    const source = timer(0, 1000); // Emit a value every second
    const timer$ = source.subscribe(() => {
      this.timeRemaining--;

      if (this.timeRemaining === 0) {
        this.finishTest();
      }
    });

    this.timerSubscription = timer$;
  }

  stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  formatTimeRemaining(): string {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  get testResult(): string {
    const score = (this.correctAnswers / this.totalQuestions) * 100;
    return score >= this.passingScore ? 'Passed' : 'Failed';
  }

  retryTest(): void {
    this.questionReview = [];
    this.testStarted = false;
    this.testFinished = false;
    this.currentQuestionIndex = 0;
    this.currentSymbol = '';
    this.userAnswer = '';
    this.questionsAnswered = 0;
    this.correctAnswers = 0;
    this.timeRemaining = 180;
  }

}
