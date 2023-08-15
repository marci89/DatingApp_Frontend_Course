import { Component, Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/messages.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css'],
  standalone: true,
  imports: [CommonModule, TimeagoModule, FormsModule]
})
export class MemberMessagesComponent {
  @Input() username?: string;
  messages: Message[] = [];

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    if (this.username){
      this.messageService.getMessageThread(this.username).subscribe({
        next: messages => this.messages = messages
      })
    }
  }
}
