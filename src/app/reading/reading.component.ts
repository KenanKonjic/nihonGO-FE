import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit{
  title = 'Reading Practice';
  welcome = 'Welcome to the Reading Practice page. Improve your reading skills by practicing with various Japanese texts and passages.';
  passages: any[] = [
    {
      passage: '今日の天気は晴れです。',
      furigana: 'きょうのてんきははれです。',
      questions: [
        { question: 'What is today\'s weather?', choices: ['Sunny', 'Rainy', 'Cloudy'], answerIndex: 0 }
      ]
    },
    {
      passage: '私は日本に住んでいます。',
      furigana: 'わたしはにほんにすんでいます。',
      questions: [
        { question: 'Where do I live?', choices: ['America', 'England', 'Japan'], answerIndex: 2 }
      ]
    }
    // Add more passages and questions here
  ];

  currentPassageIndex = 0;
  currentPassage: any;
  userAnswers: number[] = [];
  showResults = false;

  ngOnInit() {
    this.currentPassage = this.passages[this.currentPassageIndex];
  }

  nextPassage(): void {
    if (this.currentPassageIndex < this.passages.length - 1) {
      this.currentPassageIndex++;
      this.currentPassage = this.passages[this.currentPassageIndex];
      this.userAnswers[this.currentPassageIndex] = -1;
      this.showResults = false;
    }
  }

  previousPassage(): void {
    if (this.currentPassageIndex > 0) {
      this.currentPassageIndex--;
      this.currentPassage = this.passages[this.currentPassageIndex];
      this.showResults = false;
    }
  }

  checkAnswer(): void {
    this.showResults = true;
  }

  isAnswerCorrect(questionIndex: number, answerIndex: number): boolean {
    return this.userAnswers[questionIndex] === answerIndex;
  }
}
