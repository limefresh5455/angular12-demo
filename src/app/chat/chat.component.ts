import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: any;
  messages: string[] = [];
  username: any = '';

  constructor(private chatService: ChatService) {
  }

  login(value: any){
    this.username = value;
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: any) => {
        this.messages.push(message);
      });
  }

}
