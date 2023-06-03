import { Component } from '@angular/core';

interface VocabularyWord {
  word: string;
  meaning: string;
  example: string;
  audioUrl: string;
}
@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.css']
})
export class VocabComponent {
  vocabularyWords: VocabularyWord[] = [
    {
      word: 'こんにちは',
      meaning: 'Hello',
      example: 'こんにちは、元気ですか？',
      audioUrl: '/assets/audio/hello_audio.mp3'
    },
    {
      word: 'ありがとう',
      meaning: 'Thank you',
      example: 'ありがとう、助かりました。',
      audioUrl: '/assets/audio/thankyou_audio.mp3'
    },
    {
      word: 'すみません',
      meaning: 'Excuse me',
      example: 'すみません、お手洗いはどこですか？',
      audioUrl: '/assets/audio/excuseme_audio.mp3'
    },
    {
      word: 'ごめんなさい',
      meaning: 'I am sorry',
      example: 'ごめんなさい、遅くなってしまいました。',
      audioUrl: '/assets/audio/sorry_audio.mp3'
    },
    {
      word: 'さようなら',
      meaning: 'Goodbye',
      example: 'さようなら、また会いましょう。',
      audioUrl: '/assets/audio/goodbye_audio.mp3'
    },
    {
      word: 'お元気ですか',
      meaning: 'How are you?',
      example: 'お元気ですか？',
      audioUrl: '/assets/audio/howareyou_audio.mp3'
    },
    {
      word: 'はい',
      meaning: 'Yes',
      example: 'はい、分かりました。',
      audioUrl: '/assets/audio/yes_audio.mp3'
    },
    {
      word: 'いいえ',
      meaning: 'No',
      example: 'いいえ、違います。',
      audioUrl: '/assets/audio/no_audio.mp3'
    }
  ];
}
