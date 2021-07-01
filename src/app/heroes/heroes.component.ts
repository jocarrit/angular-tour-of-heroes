import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  heroes: Hero[] = []

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  }

  selectedHero?: Hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

}
