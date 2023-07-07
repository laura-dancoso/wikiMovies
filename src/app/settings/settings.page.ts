import { Component } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { ThemeService } from '../shared/theme/theme.service';
import { TheatersService } from '../shared/theaters/services/theaters.service';
import { GenresService } from '../shared/genres/services/genres.service';
import { Observable } from 'rxjs';
import { Genre } from '../shared/genres/models/genre.model';
import { Theater } from '../shared/theaters/models/theater.model';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  title = NameTabs.Settings;
  genres$: Observable<Genre[]>;
  theaters$: Observable<Theater[]>;

  notifSelected:any;
  genresSelected:any;
  theatersSelected:any;

  public darkMode!: boolean;


  selectConfiguration(label: 'Cines' | 'Géneros') {
    return {
      header: label,
      subHeader: `Seleccioná los ${label} de tu preferencia`,
      message: 'Las notificaciones que te lleguen serán según esta configuración',
      translucent: true,
    }
  }
  constructor(private themeService: ThemeService, private theatersService: TheatersService, private genresService: GenresService,
    private storageService: StorageService) {
    this.themeService.darkMode$.subscribe((dm) => this.darkMode = dm);
    this.genres$ = this.genresService.getGenres();
    this.theaters$ = this.theatersService.getTheaters();
    this.storageService.get('notificationsSettings')?.then(notif=> this.notifSelected = notif);
    this.storageService.get('filtersSettings')?.then(filters=> {
      this.genresSelected = filters?.genresId ?? null;
      this.theatersSelected = filters?.theatersId ?? null;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  setNotificationsSettings(ev: any) {
    this.storageService.set('notificationsSettings', ev.detail.value);
  }

  setGenres(ev: any) {
    this.storageService.get('filtersSettings')?.then(filter=>{
      this.storageService.set('filtersSettings', { genresId: ev.detail.value, theatersId: filter?.theatersId ?? null});
    })
  }

  setTheaters(ev: any) {
    this.storageService.get('filtersSettings')?.then(filter=>{
      this.storageService.set('filtersSettings', { theatersId: ev.detail.value, genresId: filter?.genresId ?? null});
    })
  }
}
