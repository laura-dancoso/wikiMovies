import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {

  movies$?: Observable<Movie[]>;

  constructor(
    private moviesService: MoviesService
  ) {
    this.movies$ = this.moviesService.movies$;
  }

  ngOnInit() { }

}
