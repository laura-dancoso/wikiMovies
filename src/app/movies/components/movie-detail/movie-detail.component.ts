import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent  implements OnInit {

  id: number = 0;
  movie$?: Observable<Movie>;

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
}
