import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmService {


  constructor(public http: HttpClient) {
  }

  /**
   * Un film depuis moviedb par son id (depuis la liste)
   * @param {number} id
   * @returns {Observable<Object>}
   */
  getFilm(id: number) {
    // return new Film(2099, 'Avengers', 'toto.jpg', 20);
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?sort_by=popularity.desc&api_key=f2c5507b4a8c54fc798f91316b95b5bf')
  }

  /**
   * un film en dur
   * @returns {Observable<Object>}
   */
  getFilmWeb() {
    // clé pour accéder à l'api
    this.http.get('https://api.themoviedb.org/3/movie/550?api_key=f2c5507b4a8c54fc798f91316b95b5bf')
      .subscribe(value => console.log('Film : ', value));
    return this.http.get('http://setheal-api-films.herokuapp.com/#/Films/get_films');
  }

  /**
   * liste de films depuis themoviedb
   * @returns {Observable<Object>}
   */
  getListFilm() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f2c5507b4a8c54fc798f91316b95b5bf');
  }

}

export class Film {
  id: number;
  title: string;
  poster_path: string;
  popularity: number;

  constructor(id: number, title: string, poster_path: string, popularity: number) {
    this.id = id;
    this.title = title;
    this.poster_path = poster_path;
    this.popularity = popularity;
  }
}
