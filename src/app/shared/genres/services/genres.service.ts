import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { GENRES } from 'src/app/mocks/getGenres';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor() { }
  /**
   *
   * @returns Devuelve la lista de géneros de peliculas disponibles
   * La implementación de este método se modificará cuando tengamos disponible la API
   */
  getGenres(){
    return of(GENRES);
  }
}
