import { Component, OnInit } from '@angular/core';
import {Film, FilmService} from '../service/film.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
  providers: [ FilmService]
})
export class ListFilmsComponent implements OnInit {

  loading: boolean = true;
  listFilm: Array<Film> = new Array<Film>();
  posterUrl = 'http://image.tmdb.org/t/p/w500/';
    /*listFilm: any*/;


  constructor(public filmService: FilmService) {
    filmService.getListFilm().subscribe(resp => {
      console.log(resp);
      // si listFilm est un any, l'hydratation sera faite automatiquement sur la base des noms des attributs
      //this.listFilm = resp['results'];
      // sinon, avec un stream
      this.listFilm = resp['results'].map(value => new Film(value['id'], value['title'], value['poster_path'], value['popularity']));
      // = new Film(resp['title'], resp['poster_path'], resp['popularity']);
      this.loading = false;
    }, error1 => console.warn('erreur : ', error1));
  }

  ngOnInit() {
  }

  mouseOver($event) {
    /*$event.target.style.addClass(this, "posterOver");*/

  }
}


