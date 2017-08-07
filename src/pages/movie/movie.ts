import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TMDbService } from '../../services/movieapi.service';
import { MovieApiDetails } from '../../models/movieapi-details.model'


@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  movie : MovieApiDetails = new MovieApiDetails();

  constructor(public navCtrl: NavController, public navParams: NavParams, public tmdbService: TMDbService) {
    
    let id = this.navParams.get("id");
    console.log(id);

    this.tmdbService.getMoviesDetails(id)
      .then(movieFetched => {
        if(movieFetched.poster_path != undefined && movieFetched.poster_path != "")
        {
          movieFetched.poster_path_formatted = "https://image.tmdb.org/t/p/w500" + movieFetched.poster_path
        }
        else{
          movieFetched.poster_path_formatted = "";
        }

        movieFetched.vote_average_fivestar = movieFetched.vote_average/2; 

      this.movie = movieFetched;
      console.log(this.movie);
    });
  }
}
