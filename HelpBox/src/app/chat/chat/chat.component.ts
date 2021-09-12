import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { Observable } from 'rxjs';
import { ChatbotService } from '../chatbot.service';
import { scan, tap } from 'rxjs/operators';

import { TestService } from '../../auth/test.service'
@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;


  constructor(public chat: ChatbotService , public test: TestService  ) { }

  ngOnInit() {
         // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
    .pipe(scan((acc, val) => acc.concat(val) ));
    const msgFirst = new Message('Witaj w czym mogę pomóc?', 'bot');
    this.chat.update(msgFirst);
  }


sendMessage() {
  if(this.formValue){
  this.chat.converse(this.formValue);
  const result = this.test.df_client_call({
    queryInput: {
        text: {
            text: this.formValue,
            languageCode: 'pl',
        },
    }}, "123445678").pipe(tap(data => {console.log('data :>> ', data)}))
    console.log('result :>> ', result);
  this.formValue = '';
    }
  }


}
