import { Component } from '@angular/core';
import { Character } from '../interfaces/character.inteface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPage {
  constructor(private dbzService : DbzService){}

  get characters() : Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById(Id : string) : void{
    this.dbzService.onDeleteCharacterById(Id);
  }

  onNewCharacter(character : Character) : void{
    this.dbzService.onNewCharacter(character);
  }
}
