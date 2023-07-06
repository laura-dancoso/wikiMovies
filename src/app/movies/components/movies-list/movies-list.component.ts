import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {

  movies$?: Observable<Movie[]>;

  constructor(
    private moviesService: MoviesService, private filtersService :FiltersService
  ) {
    this.movies$ = this.moviesService.getMovies();

    this.filtersService.filtersChange.subscribe(ids=>{
      this.movies$ = this.moviesService.getMovies({ genresId: ids.genresId  ?? undefined, theatersId: ids.theatersIds ?? undefined});
    });

    this.filtersService.clearFilters.subscribe(()=> this.movies$ = this.moviesService.getMovies());
  }

  ngOnInit() { }

  handleRefresh(event: any) {
    this.filtersService.clearFilters.emit();
    event.target.complete();
  }
}
