import { Component } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent {
  lessons: { title: string; description: string; examples: string[] }[] = [
    {
      title: 'は and が particles',
      description: 'The は (wa) and が (ga) particles are used to mark the subject of a sentence. は (wa) is used to indicate a topic, while が (ga) is used to indicate the subject in a neutral context.',
      examples: [
        'わたしは がくせいです。 (Watashi wa gakusei desu.) - I am a student.',
        'にほんごが すきです。 (Nihongo ga suki desu.) - I like Japanese.'
      ]
    },
    {
      title: 'て-form of Verbs',
      description: 'The て (te)-form of verbs is used to connect multiple verbs or to indicate various grammatical patterns such as giving commands, making requests, or expressing permission.',
      examples: [
        'たべて ください。 (Tabete kudasai.) - Please eat.',
        'あそんで ください。 (Asonde kudasai.) - Please play.'
      ]
    },
    {
      title: 'ない-form of Verbs',
      description: 'The ない (nai)-form of verbs is used to express negation or the absence of an action. It is created by replacing the final い (i) of a verb with ない (nai).',
      examples: [
        'たべない。 (Tabenai.) - I do not eat.',
        'みません。 (Mimasen.) - I do not see.'
      ]
    },
    {
      title: 'Sentence Structure',
      description: 'Learn the basic sentence structure in Japanese.',
      examples: [
        'Subject + Verb + Object',
        '彼は映画を見ます。 (Kare wa eiga o mimasu.) - He watches a movie.',
        '今日、友達と遊びます。 (Kyou, tomodachi to asobimasu.) - Today, I will play with my friend.'
      ]
    }
  ];

  constructor() { }
}
