import { NgModule } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  providers: [],
})
export class HeroesModule { }
