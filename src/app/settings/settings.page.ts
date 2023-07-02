import { Component } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { ThemeService } from '../shared/theme/theme.service';
import { TheatersService } from '../shared/theaters/services/theaters.service';
import { GenresService } from '../shared/genres/services/genres.service';
import { Observable } from 'rxjs';
import { Genre } from '../shared/genres/models/genre.model';
import { Theater } from '../shared/theaters/models/theater.model';

@Component({
  selector: 'settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {
  
  title = NameTabs.Settings;
  genres$: Observable<Genre[]>;
  theaters$: Observable<Theater[]>;

  public darkMode!:boolean;


  selectConfiguration(label: 'Cines'|'Géneros'){
    return {
      header: label,
      subHeader: `Seleccioná los ${label} de tu preferencia`,
      message: 'Las notificaciones que te lleguen serán según esta configuración',
      translucent: true,
    }
  }
  constructor(private themeService: ThemeService, private theatersService:TheatersService, private genresService: GenresService) {
    this.themeService.darkMode$.subscribe((dm)=> this.darkMode = dm);
    this.genres$ = this.genresService.getGenres();
    this.theaters$ = this.theatersService.getTheaters();
  }

  toggleTheme(){
    this.themeService.toggleTheme();
  }
}
