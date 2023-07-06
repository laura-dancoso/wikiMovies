
import { ModalController } from '@ionic/angular';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenresService } from './../../../shared/genres/services/genres.service';
import { Genre } from './../../../shared/genres/models/genre.model';
import { MoviesService } from '../../services/movies.service';
import { Filter } from '../../models/movie.model';
import { Observable } from 'rxjs';
import { FiltersService } from '../../services/filters.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent  implements OnInit {

  genres?: Genre[]; 
  selectGenres?: number[] | null;
  selectTheaters?: number[] | null;

  constructor( 
    private modalCtrl: ModalController, 
    private genresService: GenresService,
    private filtersService: FiltersService) {
      this.selectGenres = this.filtersService.genresId;
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

  confirmChanges() {
    this.filtersService.filtersChange.emit({genresId: this.selectGenres!, theatersIds: this.selectTheaters!});
    this.dismiss();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  clearGenresFilters(){
    this.selectGenres = null;
    this.filtersService.clearFilters.emit();
    this.dismiss();
  }

}
