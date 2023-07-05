
import { ModalController } from '@ionic/angular';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenresService } from './../../../shared/genres/services/genres.service';
import { Genre } from './../../../shared/genres/models/genre.model';
import { MoviesService } from '../../services/movies.service';
import { Filter } from '../../models/movie.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent  implements OnInit {

  @Output() selectionChange = new EventEmitter<number[]>();  
  genres?: Genre[]; 
  selectGenres?: number[];


  constructor( private modalCtrl: ModalController, private genresService: GenresService, private movieService: MoviesService ) {

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

  handleChange(ev: any) {
    this.selectGenres= ev.target.value;
  }
  confirmChanges() {
    this.selectionChange.emit(this.selectGenres);
    this.dismiss();
  }


 /* filtroGenreTheater(cine: string, generoId: string ){
    this.movieService.getFilterMovie(cine, generoId).subscribe(
      (filtros: Filter)=>{
        const filteredMovies = filtros.filter((filter: Filter) => {
          const theaterIncluido = !cine || filter.theater.toLowerCase().includes(theater.toLowerCase());
          const generoIncluido = !generoId || filter.genres.some((genre) => genre.id === parseInt(generoId));

          return theaterIncluido && generoIncluido;
        }
        ) ;
    
      }
    )
  }  */
  
/*   buscarPeliculas(titulo: string, generoId: string) {

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
  selectGenero(event: any) {
    const generoId = event?.detail?.value;
    if (generoId !== undefined) {
      this.genre = this.genres.find((genre) => genre.id === generoId);
    }
  }  */
  dismiss(){
    this.modalCtrl.dismiss();

  }

}
