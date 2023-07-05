import { Component } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class NotificationsPage {

  title = NameTabs.Notifications;

  constructor(private notificationsService: NotificationsService) {
    console.log(this.notificationsService.token)
  }

}
