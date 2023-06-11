import { Injectable } from '@angular/core';
import { EmptyError, Observable, map, of, share, shareReplay, throwError, throwIfEmpty } from 'rxjs';
import { MOVIES } from 'src/app/mocks/getMovies';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies$: Observable<Movie[]>;

  constructor(private httpClient: HttpClient) {
    this.movies$ = this.getMovies();
  }

  /**
   *
   * @returns Devuelve la lista de peliculas disponibles
   * La implementación de este método se modificará cuando tengamos disponible la API
   * Pregunta: traemos toooda la info a movies? o solo la ppal y desp traemos la que sigue?? más que nada para los detalles
   */
  getMovies(): Observable<Movie[]> {
    return of(MOVIES).pipe(shareReplay());
  }

  getMovie(id: number): Observable<Movie> {
    return this.movies$.pipe(
      map(movies => {
        let movie = movies.find(movie => movie.id === id);
        if (!movie) throw new Error("La pelicula no existe ")
        return movie;
      }),
      shareReplay()
    )
  }

}
