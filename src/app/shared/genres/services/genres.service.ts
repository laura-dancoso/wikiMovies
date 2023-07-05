import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) { }
  /**
   *
   * @returns Devuelve la lista de géneros de peliculas disponibles
   */
  getGenres(){
    return this.httpClient.get<Genre[]>(`${environment.api}/genres`);
  }
 
}
