import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hiraganaquiz',
  templateUrl: './hiraganaquiz.component.html',
  styleUrls: ['./hiraganaquiz.component.css']
})
export class HiraganaquizComponent implements OnInit{
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

  options: string[] = [];
  pronunciation: string = '';
  correctCharacter: string = '';
  correctAnswers: number = 0;
  incorrectAnswers: number = 0;
  streak: number = 0;

  ngOnInit(): void {
    this.showNextQuestion();
  }

  playAudio(character: string): void {
    const audio = new Audio();
    audio.src = `assets/audio/${character}.mp3`;
    audio.load();
    audio.play();
  }

  showNextQuestion(): void {
    this.options = this.getRandomOptions(4);
    const randomIndex = Math.floor(Math.random() * this.options.length);
    this.correctCharacter = this.options[randomIndex];
    this.pronunciation = this.getPronunciation(this.correctCharacter);
  }

  checkAnswer(selectedOption: string): void {
    if (selectedOption === this.correctCharacter) {
      this.correctAnswers++;
      this.streak++;
      // alert('Correct!');
    } else {
      this.incorrectAnswers++;
      this.streak = 0;
    }
    this.showNextQuestion();
  }

  getPronunciation(character: string): string {
    const index = this.hiraganaCharacters.indexOf(character);
    return this.pronunciations[index];
  }

  getRandomOptions(count: number): string[] {
    const randomOptions: string[] = [];
    while (randomOptions.length < count) {
      const randomCharacter = this.hiraganaCharacters[Math.floor(Math.random() * this.hiraganaCharacters.length)];
      if (!randomOptions.includes(randomCharacter)) {
        randomOptions.push(randomCharacter);
      }
    }
    return randomOptions;
  }

  getRatio(): string {
    const totalAnswers = this.correctAnswers + this.incorrectAnswers;
    if (totalAnswers === 0) {
      return '0%';
    }
    const ratio = (this.correctAnswers / totalAnswers) * 100;
    return ratio.toFixed(2) + '%';
  }
}
