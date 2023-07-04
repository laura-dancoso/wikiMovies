import { Component, OnInit } from '@angular/core';
import { MovieDetail, Showtime, ShowtimeByDate } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/shared/genres/models/genre.model';
import { Dictionary, entries, flatten, groupBy, values } from 'lodash';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent  implements OnInit {

  id: number = 0;
  movie$?: Observable<MovieDetail>;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
    this.route.params.subscribe(
      params=>{
        this.id = parseInt(params['id']);
        this.movie$ = this.moviesService.getMovie(this.id);
      }
    );
  }

  ngOnInit() {}

  handleRefresh(event: any){
    this.movie$ = this.moviesService.getMovie(this.id);
    event.target.complete();
  }

  getGenres(genres: Genre[]){
    return genres.map(genres=> genres.description).join(', ');
  }

  getShowtimesDetail(showtimes: Showtime[]): Dictionary<ShowtimeByDate[]>{
    /**
     * se agrupan los showtimes por fecha, y despues por teatro
     */
    const showtimesByDate = groupBy(flatten(showtimes.map(st=>st.dates.map(d=> ({...d, theater: st.theater})))), 'date')
    return showtimesByDate;
  }
}
