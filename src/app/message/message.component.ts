import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.css']
})

export class MessageComponent {
	public messages: string[] = [];

	constructor(public messageService: MessageService) {}
}
