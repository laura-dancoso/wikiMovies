import { Component, OnInit } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { NavController } from '@ionic/angular';

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
  goToFilterPage(){
    this.navCtrl.navigateForward('filter')
  }
 

}
