import { GenresService } from './../../../shared/genres/services/genres.service';
import { IonInput } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Observable, of } from 'rxjs';
import {  Movie } from './../../models/movie.model';
import { Genre } from 'src/app/shared/genres/models/genre.model';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent  implements OnInit {
  movieSearch?: Observable<Movie[]>; 
  loading: boolean=true; 
  genres?: Genre[]; 
  searchText: string = '';

  constructor(private moviesService: MoviesService, private genresService:GenresService ) {
   this.movieSearch= this.moviesService.getSearchMovie();  

  }

  ngOnInit() {
    this.loadGenres();

  }
  loadGenres(){
    this.genresService.getGenres().subscribe(
      (genres: Genre[])=>{
        this.genres=genres;
      },
      (error: any)=>{
        console.error(error);
      }
    );
  }
  getGenres(genres: Genre[]){
    return genres.map(genres=> genres.description).join(', ');
  } 
  buscarPeliculas(titulo: string, generoId: string) {
    this.loading = false;
    this.moviesService.getSearchMovie(titulo, generoId).subscribe(
      (movies: Movie[]) => {
        // Filtrar las películas por título y género
        const filteredMovies = movies.filter((movie: Movie) => {
          const tituloIncluido = !titulo || movie.title.toLowerCase().includes(titulo.toLowerCase());
          const generoIncluido = !generoId || movie.genres.some((genre) => genre.id === parseInt(generoId));

          return tituloIncluido && generoIncluido;
        });

        this.movieSearch = of(filteredMovies);
        this.loading = false;
      },
      (error: any) => {
        console.error(error);
      }
    );  
  }
   /*  const title = (event.detail as any).value;
    const genre='';
    this.movieSearch = this.moviesService.getSearchMovie(title, genre); */
  
}


