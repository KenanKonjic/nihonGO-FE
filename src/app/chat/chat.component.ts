import { Component } from '@angular/core';
import { OpenAiApiService } from '../services/open-ai-api.service';
import { TypewriterService } from '../services/typewriter.service';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [];
  userInput: string = '';

  constructor(
    private openAiApiService: OpenAiApiService,
    private typewriterService: TypewriterService
  ) {}

  sendMessage(): void {
    if (this.userInput.trim()) {
      this.messages.push({content: this.userInput, sender: 'User' });
      this.typewriterService.getTypingEffect(this.userInput).subscribe(
        (partialMessage: string) => {
          this.messages[this.messages.length - 1].content = partialMessage;
        },
        (error) => {
          console.error('Error:', error);
        },
        () => {
          // Call the backend to get the full response after the typing effect
          this.openAiApiService.getChatResponse(this.userInput).subscribe(
            (response: any) => {
              this.messages.push({ content: response.choices[0].message.content, sender: 'Bot' });
            }
          );
        }
      );
      this.userInput = '';
    }
  }
}

