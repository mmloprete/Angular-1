import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList : Character[] = [{
    name: "Trunks",
    power: 3000,
  }]

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(Id? : string) {
    if(!Id) return
    this.onDelete.emit(Id);
  }


}
