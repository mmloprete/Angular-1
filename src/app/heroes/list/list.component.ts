import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames : string [] = ["The Flash", "Batman", "Green Lantern", "Green Arrow", "Superman", "Mujer Maravilla", "Aquaman"]
  public lastHero : string | undefined = '';

  borrarUltimoHeroe() : void {
    this.lastHero = this.heroNames.pop();
  }
}
