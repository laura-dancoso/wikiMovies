import { Component } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class NotificationsPage {

  title = NameTabs.Notifications;

  constructor() {}

}
