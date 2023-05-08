import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { Demo01Component } from './demos/demo01/demo01.component';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { Exercice1Component } from './exercicesThomasDes8Mai2023/exercice1/exercice1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo01Component,
    Exo01Component,
    Exercice1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
