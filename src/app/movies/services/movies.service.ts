import { Injectable } from '@angular/core';
import { Observable, shareReplay} from 'rxjs';
import { Filter, Movie, MovieDetail } from '../models/movie.model';
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
  getSearchMovie(title?: string, genre?: string): Observable<Movie[]> {
    let params = new HttpParams();
    if(title) params = params.set('title', title);
    if (genre) params = params.set('genres', genre);
    return this.httpClient.get<Movie[]>(`${environment.api}/movies`, { params: params });
  }
  getFilterMovie(theater?: string, genre?: string): Observable<Filter> {
    let params = new HttpParams();
    if(theater) params = params.set('theater', theater);
    if (genre) params = params.set('genres', genre);
    return this.httpClient.get<Filter>(`${environment.api}/movies`, { params: params });
  }

}
