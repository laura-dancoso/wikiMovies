import { Component } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { ThemeService } from '../shared/theme/theme.service';

@Component({
  selector: 'settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {
  
  title = NameTabs.Settings;

  public darkMode!:boolean;

  selectConfiguration(label: 'Cines'|'Géneros'){
    return {
      header: label,
      subHeader: `Seleccioná los ${label} de tu preferencia`,
      message: 'Las notificaciones que te lleguen serán según esta configuración',
      translucent: true,
    }
  }
  constructor(private themeService: ThemeService) {
    this.themeService.darkMode$.subscribe((dm)=> this.darkMode = dm);
  }

  toggleTheme(){
    this.themeService.toggleTheme();
  }
}
