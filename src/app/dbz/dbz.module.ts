import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainPage } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPage,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports : [
    MainPage,
  ],
})
export class DbzModule { }
