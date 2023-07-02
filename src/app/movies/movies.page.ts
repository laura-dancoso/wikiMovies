import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { MoviesService } from './services/movies.service';
import { GenresService } from '../shared/genres/services/genres.service';
import { TheatersService } from '../shared/theaters/services/theaters.service';
import { MoviesListComponent } from './components/movies-list/movies-list.component';


@Component(
  {
    selector: 'movies',
    templateUrl: 'movies.page.html',
    styleUrls: ['movies.page.scss']
  }

  
)
export class MoviesPage {
  
  title = NameTabs.Movies;

  constructor( private navCtrl: NavController ){}
  goToSearchPage(){
    this.navCtrl.navigateForward('search-movie')
  }
 

}
