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
  ) {
  }

  sendMessage(): void {
    if (this.userInput.trim()) {
      const userMessage: Message = { content: '', sender: 'User' };
      this.messages.push(userMessage);

      this.typewriterService.getTypingEffect(this.userInput).subscribe(
        (partialMessage: string) => {
          userMessage.content = partialMessage;
        },
        (error) => {
          console.error('Error:', error);
        },
        () => {
          this.openAiApiService.getChatResponse(userMessage.content).subscribe(
            (response: any) => {
              const botMessage: Message = { content: '', sender: 'Bot' };
              this.messages.push(botMessage);
              this.typewriterService.getTypingEffect(response.choices[0].message.content).subscribe(
                (botPartialMessage: string) => {
                  botMessage.content = botPartialMessage;
                },
                (botError) => {
                  console.error('Error:', botError);
                }
              );
            }
          );
        }
      );

      this.userInput = '';
    }
  }

}

