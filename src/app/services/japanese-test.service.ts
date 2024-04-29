import { Injectable } from '@angular/core';
import { OpenAiApiService } from './open-ai-api.service';
import { JapaneseTestQuestion } from '../models/japanese-test-question.model';

@Injectable({
  providedIn: 'root'
})
export class JapaneseTestService {
  constructor(private openAiApiService: OpenAiApiService) {}

  generateTest(): Promise<JapaneseTestQuestion[]> {
    return this.openAiApiService.getChatResponse('Generate a Japanese proficiency test with 10 questions of varying difficulty levels.')
      .toPromise()
      .then(response => response.choices[0].message.content as JapaneseTestQuestion[]);
  }
}
