import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TMDbService } from '../../services/movieapi.service';
import { MovieApiPopular } from '../../models/movieapi-popular.model'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies : MovieApiPopular = new MovieApiPopular();
  test : any[];

  constructor(public navCtrl: NavController, private tmdbService : TMDbService) {

    this.tmdbService.getMovies()
    .then(movieFetched => {
      let tmp = [];
      movieFetched.results.forEach((res) => {
        if(res.poster_path != undefined && res.poster_path != "")
        {
          res.poster_path_formatted = "https://image.tmdb.org/t/p/w500" + res.poster_path
        }
        else{
          res.poster_path_formatted = "";
        }
        
        tmp.push(res);
      });

      let cptr = 0;
      let tempo : any[] = [];
      this.test = [];
      
      for(let mo_res of tmp)
      {
        //console.log(mo_res);
        tempo.push(mo_res);
        cptr++;

        if(cptr === 3)
        {
          this.test.push(tempo);
          //console.log(cptr);
          cptr = 0;
          tempo = [];
        }
      }

      movieFetched.results = this.test;

      //movieFetched.poster_path_formatted = "https://image.tmdb.org/t/p/w500" + movieFetched.poster_path;

      this.movies = movieFetched;
      console.log(this.test);
    });
  }

  showMovieDetais(idMovie : number)
  {
    this.navCtrl.push("MoviePage", {id : idMovie})
  }

}
