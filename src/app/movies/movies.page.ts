import { Component, OnInit } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { MoviesService } from './services/movies.service';
import { GenresService } from '../shared/genres/services/genres.service';
import { TheatersService } from '../shared/theaters/services/theaters.service';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss']
})
export class MoviesPage {
  
  title = `Prod: ${environment.production}`;

}
