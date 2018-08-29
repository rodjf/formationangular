import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFilmsComponent} from './list-films/list-films.component';
import {FilmComponent} from './film/film.component';
import {Error404Component} from './error404/error404.component';

const routes: Routes = [
  { path: 'listeFilms', component: ListFilmsComponent},
  { path: 'detail',
    children: [
      { path: 'comment', component: ListFilmsComponent },
      { path: ':id', component: FilmComponent }
    ]
  },
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
