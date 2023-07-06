
import { GenresService } from './../shared/genres/services/genres.service';
import { Component, OnInit } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { IonModal, ModalController, NavController } from '@ionic/angular';
import { FilterComponent } from './components/filter/filter.component';

@Component(
  {
    selector: 'movies',
    templateUrl: 'movies.page.html',
    styleUrls: ['movies.page.scss']
  }

  
)
export class MoviesPage {
  
  title = NameTabs.Movies;

  constructor( private navCtrl: NavController, private modalCtrl: ModalController, private genresService: GenresService ){}
  goToSearchPage(){
    this.navCtrl.navigateForward('search-movie')
    
  }
 
  async openFiltros(){
  const modal= await this.modalCtrl.create({
    component: FilterComponent,
    
  });
  await modal.present();
 }  
  ngOnInit() {


  }

  onSelectionChange(eve: any){
    console.log(eve)
  }
}
