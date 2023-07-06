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
  getMovies(filters?:{ theatersId?: number[], genresId?: number[] }): Observable<Movie[]> {
    const theatersId = filters?.theatersId;
    const genresId = filters?.genresId;
    let params = new HttpParams();
    theatersId?.forEach( id=>
      params = params.append('theaters', id.toString())
    );
    genresId?.forEach( id=>
      params =  params.append('genres', id.toString())
    );
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

}
