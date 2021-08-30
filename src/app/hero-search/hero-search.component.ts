import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {
	debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {get} from 'lodash'

import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import { herSearchBase } from './hero-serch-base';

@Component({
	selector: 'app-hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent extends herSearchBase implements OnInit, OnChanges {
	@Input('name') protected name: string | boolean;
	heroes$!: Observable<Hero[]>;
	
	private searchTerms = new Subject<string>();

	constructor(private heroService: HeroService) {
		super()
	}

	ngOnInit(): void {
		this.heroes$ = this.searchTerms.pipe(
			debounceTime(300),
			distinctUntilChanged(),
			switchMap((term: string) => this.heroService.searchHeroes(term)),
		);
		console.log(this.name);
		this.consoleLog();
	}

	ngOnChanges(changes: SimpleChanges): void {
		const currentName = get(changes, 'name.currentValue');

		console.log(currentName === this.name);
		this.consoleName(currentName);
	}

	consoleName(name: string | Boolean) {
		console.log(name);
	}

	search(term: string): void {
		this.searchTerms.next(term);
	}
}
