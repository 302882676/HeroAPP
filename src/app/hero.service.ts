import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {MessageService} from './message.service';
import {heroesData} from './mock-heroes';

@Injectable({
	providedIn: 'root'
})

export class HeroService {
	constructor(private messageService: MessageService) {}

	getHeroes(): Observable<Hero[]> {
		this.messageService.add('heroService: fatchd heroes');
		const HEROES = of(heroesData);
		return HEROES;
	}

	getHero(id: Number): Observable<Hero> {
		const hero = heroesData.find(hero => hero.id === id)!;
		this.messageService.add(`HeroService: fetched hero id=${id}`);
		return of(hero);
	}
}