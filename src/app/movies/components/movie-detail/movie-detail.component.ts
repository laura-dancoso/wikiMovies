import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/shared/genres/models/genre.model';

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
}
