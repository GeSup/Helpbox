import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Message } from './message';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });
  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  
  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) { 
    const userMessage = new Message(msg, 'user');     
    this.update(userMessage);
    return this.client.textRequest(msg)
    .then(res => { 
      const speech = res.result.fulfillment.speech;       
      const botMessage = new Message(speech, 'bot');       
      this.update(botMessage);       
      });
  }  

  talk(msg: Message) {
    this.client.textRequest(msg) 
    .then(res => console.log(res) );
    }
}
