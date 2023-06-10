import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MOVIES } from 'src/app/mocks/getMovies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  /**
   *
   * @returns Devuelve la lista de peliculas disponibles
   * La implementación de este método se modificará cuando tengamos disponible la API
   */
  getMovies(){
    return of(MOVIES);
  }
}
