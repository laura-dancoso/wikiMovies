
import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/genres/models/genre.model';
import { MoviesService } from './../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from './../../models/movie.model';
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent  implements OnInit {
  /* searchM?: Observable<Movie[]>; */
  
  constructor(
    private moviesService: MoviesService
  ) {
    /* this.searchM= this.moviesService.getMovies(); */
  }

  ngOnInit() {}

/*   handleRefresh(event: any){
    this.movies$ = this.moviesService.getMovies();
    event.target.complete();
  } */

  /* getGenres(genres: Genre[]){
    return genres.map(genres=> genres.description).join(', ');
  } */

}
