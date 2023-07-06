
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
 
  dismiss(){
    this.modalCtrl.dismiss();

  }

}