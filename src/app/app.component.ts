import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/theme/theme.service';
import { NotificationsService } from './notifications/services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService, private notificationsService: NotificationsService) {
  }
  
  ngOnInit(): void {
    this.themeService.checkInitialTheme();
    this.notificationsService.initiateNotifications();
  }
}
