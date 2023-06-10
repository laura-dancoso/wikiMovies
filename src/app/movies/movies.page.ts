import { Component, OnInit } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { MoviesService } from './services/movies.service';
import { GenresService } from '../shared/genres/services/genres.service';
import { TheatersService } from '../shared/theaters/services/theaters.service';

@Component({
  selector: 'movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss']
})
export class MoviesPage implements OnInit {
  
  title = NameTabs.Movies;

  constructor(
    private moviesService: MoviesService,
    private genresService: GenresService,
    private theatersService: TheatersService
  ) {}

  ngOnInit(): void {
    //para que prueben los servicios: en los próximos commits se borrarán
    this.genresService.getGenres().subscribe((genres)=>console.log("genres", genres))
    this.theatersService.getTheaters().subscribe((theaters)=>console.log("theaters", theaters))
    this.moviesService.getMovies().subscribe((movies)=>console.log("movies",movies))
  }

}
