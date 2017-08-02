import { MovieApiGenres } from './movieapi-genres.model';
import { MovieApiProdCompanies } from './movieapi-prod-companies.model';
import { MovieApiProdCountries } from './movieapi-prod-countries.model';
import { MovieApiSpokenLanguages } from './movieapi-spokenlanguages.model';


export class MovieApiDetails{
    adult : boolean;
    backdrop_path : string;
    belongs_to_collection : object;
    budget : number;
    genres : MovieApiGenres[];
    homepage : string;
    id : number;
    imdb_id : string;
    original_language : string;
    original_title : string;
    overview : string;
    popularity : number;
    poster_path : string;
    production_companies : MovieApiProdCompanies[];
    production_countries : MovieApiProdCountries[];
    release_date : string;
    revenue : number;
    runtime : number;
    spoken_languages : MovieApiSpokenLanguages[];
    status : string;
    tagline : string;
    title : string;
    video : boolean;
    vote_average : number;
    vote_count : number;
}