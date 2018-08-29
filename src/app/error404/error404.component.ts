import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) {
    console.log('Erreur 404 !');
    // setTimeout(() => this.router.navigate(['/']), 1000);
    // setTimeout(() => this.router.navigate(['/er']), 1000);

    // observable :
    // age.subscribe(value => console.log('Age : ', value));
    // age.map(value => console.log('Age final : ', value));
  }

  ngOnInit() {
  }



}
/*
// pour faire un observable qui s'incrémenter et s'arrête
const age = new Observable(observer => {
  observer.next(25);
  setTimeout( () => {
    observer.next(26);
    setTimeout( () => {
      observer.next(80);
      observer.complete();
    }, 4000)
  }, 2000)
});*/
