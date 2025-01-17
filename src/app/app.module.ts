import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { Demo01Component } from './demos/demo01/demo01.component';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { FormsModule } from '@angular/forms';
import { Exo02Component } from './exercices/exo02/exo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Exo03Component } from './exercices/exo03/exo03.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo01Component,
    Exo01Component,
    Demo02Component,
    Exo02Component,
    Demo03Component,
    Exo03Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
