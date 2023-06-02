import {Component, OnInit} from '@angular/core';
import {Subscription, Observable, timer} from "rxjs";

@Component({
  selector: 'app-katakanatest',
  templateUrl: './katakanatest.component.html',
  styleUrls: ['./katakanatest.component.css']
})
export class KatakanatestComponent implements OnInit{

  katakanaCharacters: string[] = [
    'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
    'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ',
  ];

  pronunciations: string[] = [
    'a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no',
    'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'n', 'ga', 'gi', 'gu', 'ge', 'go',
    'za', 'ji', 'zu', 'ze', 'zo', 'da', 'ji', 'zu', 'de', 'do', 'ba', 'bi', 'bu', 'be', 'bo', 'pa', 'pi', 'pu', 'pe', 'po',
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
    const randomIndex = Math.floor(Math.random() * this.katakanaCharacters.length);
    this.currentSymbol = this.katakanaCharacters[randomIndex];
    this.currentQuestionIndex++;
  }

  getPronunciation(character: string): string {
    const index = this.katakanaCharacters.indexOf(character);
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
