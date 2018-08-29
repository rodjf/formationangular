import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Film, FilmService} from '../service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  providers: [ FilmService ]
})
export class FilmComponent implements OnInit {

  film: Film;

  loading: boolean = true;

  constructor(public route: ActivatedRoute, public filmService: FilmService, film: Film) {

    this.filmService.getFilm(film.id).subscribe(
      resp => {
        // console.log("Film " + film.id, resp);
        this.film = new Film(resp['id'], resp['title'], resp['poster_path'], resp['popularity']);
        // this.loading = false;
      }, error1 => console.error('erreur film id = ' + film.id, error1)
    );
  }

  ngOnInit() {
    console.log(this.route.params);
  }

}
