import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="IncreaseBy(+1)">+1</button>
  <button (click)="ResetButton()">Reset</button>
  <button (click)="IncreaseBy(-1)">-1</button>

  <hr>
  `
})

export class CounterComponent {
  public counter : number = 10;

  IncreaseBy(value : number) : void {
    this.counter += value;
  }

  ResetButton() : void{
    this.counter = 10;
  }
}
