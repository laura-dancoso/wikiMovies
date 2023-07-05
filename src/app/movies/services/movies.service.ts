import { Injectable } from '@angular/core';
import { Observable, shareReplay} from 'rxjs';
import { Movie, MovieDetail } from '../models/movie.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   *
   * @returns Devuelve la lista de peliculas disponibles
   */
  getMovies(theatersId?: number[], gendersId?: number[]): Observable<Movie[]> {
    const params = new HttpParams();
    if (theatersId) params.appendAll({'theaters': !theatersId});
    if (gendersId) params.appendAll({'genders': !gendersId});
    return this.httpClient.get<Movie[]>(`${environment.api}/movies`, { params: params }).pipe(shareReplay());
  }
  
  getMovie(id: number): Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(`${environment.api}/movies/${id}`).pipe(shareReplay()
    )
  }

}
