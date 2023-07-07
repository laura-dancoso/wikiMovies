import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

import { Genre } from 'src/app/shared/genres/models/genre.model';
import { GenresService } from 'src/app/shared/genres/services/genres.service';
import { Theater } from 'src/app/shared/theaters/models/theater.model';
import { TheatersService } from 'src/app/shared/theaters/services/theaters.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FiltersService } from '../../services/filters.service';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  @Output() chipClicked = new EventEmitter();
  
  genres?: Genre[]; 
  theaters?: Theater[];
  selectGenres?: number[] | null;
  selectTheaters?: number[] | null;
  movies$?: Observable<Movie[]>;
  genresId?: number[] | null;
  theatersId?: number[] | null;


  constructor(private moviesService: MoviesService,
    private filtersService: FiltersService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService, private genresService: GenresService, private theaterService: TheatersService ) 
  {
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
      this.selectGenres = ids.genresId;
      this.selectTheaters = ids.theatersIds;
 
    });

    this.filtersService.clearFilters.subscribe(() => this.movies$ = this.moviesService.getMovies());
  }
  get filtrosAplicados() {
    
    return (this.filtersService.genresId!! && this.filtersService.genresId.length > 0) || (this.filtersService.theatersId!! && this.filtersService.theatersId.length > 0);
  }
 getGenres(genre: Genre[]){
    
    return genre.map(genres=> genres.description);
  } 

  
  ngOnInit() { 
    this.loadGenres();
    this.loadTheaters(); 
  }
  loadGenres(){
    this.genresService.getGenres().subscribe
    (
      (genres: Genre[])=>{this.genres=genres;}
    );
  }
  loadTheaters()
  {
    this.theaterService.getTheaters().subscribe
    (
      (theater: Theater[])=>{this.theaters=theater}
    );
  } 

  handleRefresh(event: any) {
    this.filtersService.clearFilters.emit();
    event.target.complete();
  }
  getGenresDescription(id: number){
    return this.genres?.find(g=>g.id == id)
    ?.description
  }
  getTheatersDescription(id: number)
  {
    return this.theaters?.find(t=>t.id == id)
    ?.description
  }
}
