
import { ModalController } from '@ionic/angular';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenresService } from './../../../shared/genres/services/genres.service';
import { Genre } from './../../../shared/genres/models/genre.model';
import { FiltersService } from '../../services/filters.service';
import { Theater } from 'src/app/shared/theaters/models/theater.model';
import { TheatersService } from 'src/app/shared/theaters/services/theaters.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent  implements OnInit {

  genres?: Genre[]; 
  theaters?: Theater[];
  selectGenres?: number[] | null;
  selectTheaters?: number[] | null;

  constructor( private modalCtrl: ModalController, private genresService: GenresService, private filtersService: FiltersService, private theaterService: TheatersService ) {
      this.selectGenres = this.filtersService.genresId;
      this.selectTheaters = this.filtersService.theatersId;
  }

  ngOnInit() {
    this.loadGenres();
    this.loadTheaters();
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
  loadTheaters(){
    this.theaterService.getTheaters().subscribe(
      (theater: Theater[])=>{this.theaters=theater}
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
    this.selectTheaters = null;
    this.filtersService.clearFilters.emit();
    this.dismiss();
  }

}