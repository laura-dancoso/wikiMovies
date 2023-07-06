import { Component } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { ModalController, NavController } from '@ionic/angular';
import { FilterComponent } from './components/filter/filter.component';
import { FiltersService } from './services/filters.service';
import { ActivatedRoute } from '@angular/router';

@Component(
  {
    selector: 'movies',
    templateUrl: 'movies.page.html',
    styleUrls: ['movies.page.scss']
  }

)
export class MoviesPage {

  title = NameTabs.Movies;

  get filtrosAplicados() {
    return (this.filterServices.genresId!! && this.filterServices.genresId.length > 0) || (this.filterServices.theatersId!! && this.filterServices.theatersId.length > 0);
  }
  
  constructor(private navCtrl: NavController, private modalCtrl: ModalController, private filterServices: FiltersService,private route: ActivatedRoute) { 
  }
  
  goToSearchPage() {
    this.navCtrl.navigateForward('search-movie')
  }

  async openFiltros() {
    const modal = await this.modalCtrl.create({
      component: FilterComponent,
    });
    await modal.present();
  }

  ngOnInit() {
  }
}
