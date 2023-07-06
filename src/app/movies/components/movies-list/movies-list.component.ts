import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { FiltersService } from '../../services/filters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {

  movies$?: Observable<Movie[]>;
  genresId?: number[] | null;
  theatersId?: number[] | null;

  constructor(
    private moviesService: MoviesService,
    private filtersService: FiltersService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {
    this.route.queryParams.subscribe(
      params => {
        if (params['notifications'] === 'true') {
          this.storageService.get('filtersSettings')?.then((result) => {
            this.filtersService.filtersChange.emit({ genresId: result?.genresId ?? null, theatersIds: result?.theatersId ?? null });
            this.router.navigate(['/'])
          }
          )
        }

      }
    );

    this.movies$ = this.moviesService.getMovies();

    this.filtersService.filtersChange.subscribe(ids => {
      this.movies$ = this.moviesService.getMovies({ genresId: ids.genresId ?? undefined, theatersId: ids.theatersIds ?? undefined });
    });

    this.filtersService.clearFilters.subscribe(() => this.movies$ = this.moviesService.getMovies());
  }

  ngOnInit() { }

  handleRefresh(event: any) {
    this.filtersService.clearFilters.emit();
    event.target.complete();
  }
}
