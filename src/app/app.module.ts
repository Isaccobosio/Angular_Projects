import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EsempioComponenteComponent } from './esempio-componente/esempio-componente.component';
import { CarDescriptionComponent } from './car-description/car-description.component';

@NgModule({
  declarations: [
    AppComponent,
    EsempioComponenteComponent,
    CarDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
