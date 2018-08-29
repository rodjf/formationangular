import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import { FilmComponent } from './film/film.component';
import { Error404Component } from './error404/error404.component';
import {LoadingModule} from "ngx-loading";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListFilmsComponent,
    FilmComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
