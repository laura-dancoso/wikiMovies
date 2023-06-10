import { Component } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';

@Component({
  selector: 'movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss']
})
export class MoviesPage {
  
  title = NameTabs.Movies;

  constructor() {}

}
