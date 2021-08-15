import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
	public messages: string[] = [];
  
  public add(messages: string) {
    this.messages.push(messages);
  }

  public clear(): void {
    this.messages = [];
  }
}
