import {JapaneseTestQuestion} from "../models/japanese-test-question.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class JapaneseTestService {
  private questions: JapaneseTestQuestion[] = [
    {
      question: 'What is the Japanese word for "cat"?',
      answer: 'A) ねこ (neko)',
      difficulty: 'easy',
      choices: ['A) ねこ (neko)', 'B) いぬ (inu)', 'C) さかな (sakana)', 'D) とり (tori)']
    },
    {
      question: 'Choose the correct translation: 青い (aoi)',
      answer: 'A) Blue',
      difficulty: 'easy',
      choices: ['A) Blue', 'B) Red', 'C) Green', 'D) Yellow']
    },
    {
      question: 'Which of the following means "water" in Japanese?',
      answer: 'C) みず (mizu)',
      difficulty: 'easy',
      choices: ['A) おかね (okane)', 'B) くるま (kuruma)', 'C) みず (mizu)', 'D) いえ (ie)']
    },
    {
      question: 'What is the Japanese word for "student"?',
      answer: 'D) がくせい (gakusei)',
      difficulty: 'easy',
      choices: ['A) ともだち (tomodachi)', 'B) いぬ (inu)', 'C) せんせい (sensei)', 'D) がくせい (gakusei)']
    },
    {
      question: 'Which particle indicates the direct object in a sentence?',
      answer: 'C) を (wo)',
      difficulty: 'easy',
      choices: ['A) は (wa)', 'B) が (ga)', 'C) を (wo)', 'D) も (mo)']
    },
    {
      question: 'What does the sentence 日本語を勉強しています mean?',
      answer: 'D) I am studying Japanese.',
      difficulty: 'easy',
      choices: ['A) I study Japanese.', 'B) I studied Japanese.', 'C) I will study Japanese.', 'D) I am studying Japanese.']
    },
    {
      question: 'Read the following passage and choose the correct answer:\n' +
        '私の趣味は音楽を聴くことです。毎日家でCDを聴きます。時々、友達とコンサートに行きます。\n' +
        'What is the author\'s hobby?',
      answer: 'B) Listening to music',
      difficulty: 'easy',
      choices: ['A) Watching movies', 'B) Listening to music', 'C) Reading books', 'D) Playing sports']
    },
    {
      question: 'Read the following sentence and choose the correct translation: 彼は映画を見に行きました。',
      answer: 'A) He went to see a movie.',
      difficulty: 'easy',
      choices: ['A) He went to see a movie.', 'B) She went to see a movie.', 'C) They went to see a movie.', 'D) We went to see a movie.']
    },
    {
      question: 'What does the kanji 愛 (ai) mean?',
      answer: 'A) Love',
      difficulty: 'easy',
      choices: ['A) Love', 'B) Hate', 'C) Joy', 'D) Sadness']
    },
    {
      question: 'Choose the correct reading for the kanji 心:',
      answer: 'A) Kokoro',
      difficulty: 'easy',
      choices: ['A) Kokoro', 'B) Ki', 'C) Shin', 'D) Seishin']
    },
    {
      question: 'What does the Japanese idiom "猫の額" (neko no hitai) mean?',
      answer: 'C) Cat\'s forehead',
      difficulty: 'easy',
      choices: ['A) Cat\'s paw', 'B) Cat\'s whiskers', 'C) Cat\'s forehead', 'D) Cat\'s tail']
    },
    {
      question: 'What does the idiom "一石二鳥" (isseki nichou) mean?',
      answer: 'A) Killing two birds with one stone',
      difficulty: 'easy',
      choices: ['A) Killing two birds with one stone', 'B) Birds of a feather flock together', 'C) A bird in the hand is worth two in the bush', 'D) A bird may be known by its song']
    },
    // Add more questions here...
  ];

  generateTest(): Promise<JapaneseTestQuestion[]> {
    // Return a copy of the questions array to prevent modifications to the original array
    return Promise.resolve([...this.questions]);
  }
}
