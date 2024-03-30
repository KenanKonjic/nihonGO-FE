import { Component } from '@angular/core';
import { OpenAiApiService } from '../services/open-ai-api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: string[] = [];
  userInput: string = '';

  constructor(private openAiApiService: OpenAiApiService) {}

  sendMessage(): void {
    if (this.userInput.trim()) {
      this.messages.push(this.userInput);
      this.openAiApiService.getChatResponse(this.userInput).subscribe(
        (response: any) => {
          this.messages.push(response.choices[0].message.content);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
      this.userInput = '';
    }
  }
}

