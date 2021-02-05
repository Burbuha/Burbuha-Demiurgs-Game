import { CardsService } from './cards.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
