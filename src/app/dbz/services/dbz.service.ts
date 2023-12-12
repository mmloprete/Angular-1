import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inteface';
import { v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters : Character[] = [{
    id : uuid(),
    name: "Krillin",
    power: 1000,
  },{
    id : uuid(),
    name: "Goku",
    power : 10000,
  },{
    id : uuid(),
    name: "Vegeta",
    power: 7500,
  }];

  onNewCharacter(character : Character) : void {

    const newCharacter : Character = {
      id: uuid(),
      name: character.name,
      power: character.power,
    }

    this.characters.push(newCharacter);
  }

  //Regreso un array de personajes cuyo id difiera del que se le pasa
  onDeleteCharacterById(id : string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
