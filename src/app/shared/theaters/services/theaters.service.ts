import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theater } from '../models/theater.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TheatersService {

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * @returns Devuelve la lista de cines disponibles
   */
  getTheaters(){
    return this.httpClient.get<Theater[]>(`${environment.api}/theaters`);
  }
}
