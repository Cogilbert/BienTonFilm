// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { MovieApiDetails } from '../models/movieapi-details.model'

// Models
// Importez vos models ici

@Injectable()
export class TMDbService {

    private baseUrl = 'https://api.themoviedb.org/3/';
    private apiKey : string = '900265bd77885bd2db688ae23cf4c26b';

    constructor(private http: Http) { }

    public getMovies() : any
    {
        const url = `${this.baseUrl}movie/550?api_key=${this.apiKey}`;

        return this.http.get(url)
        .toPromise()
        .then(res => res.json() as MovieApiDetails)
        .catch(err => console.log("Une erreur est survenue " + err))
    }
}