import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { THEATERS } from 'src/app/mocks/getTheaters';

@Injectable({
  providedIn: 'root'
})
export class TheatersService {

  constructor() { }

  /**
   *
   * @returns Devuelve la lista de cines disponibles
   * La implementación de este método se modificará cuando tengamos disponible la API
   */
  getTheaters(){
    return of(THEATERS);
  }
}
