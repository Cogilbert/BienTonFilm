import { MovieApiResults } from './movieapi-results.model';


export class MovieApiPopular{
    page : number;
    results : MovieApiResults[];
    total_results : number;
    total_pages : number;
}