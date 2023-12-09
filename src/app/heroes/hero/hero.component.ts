import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = "Superman";
  public age : number = 78;

  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() : void{
    this.name = "The Flash";
  }

  changeAge() : void{
    this.age = 25;
  }

  resetForm() : void{
    this.name = "Superman";
    this.age = 78;
  }
}
