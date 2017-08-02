import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TMDbService } from '../../services/movieapi.service';
import { MovieApiDetails } from '../../models/movieapi-details.model'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movie : MovieApiDetails = new MovieApiDetails();

  constructor(public navCtrl: NavController, private tmdbService : TMDbService) {
    this.tmdbService.getMovies()
    .then(movieFetched => {
      this.movie = movieFetched;
      console.log(this.movie);
    });
  }

}
