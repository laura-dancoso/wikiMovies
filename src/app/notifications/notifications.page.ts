import { Component } from '@angular/core';
import { NameTabs } from '../enums/tabs-enum';
import { StorageService } from '../shared/storage.service';
import { Notification, defaultNotif } from './models/notification.model';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class NotificationsPage {

  title = NameTabs.Notifications;
  notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService) {
    this.getNotifications();
    this.notificationsService.notificationEmitedEvent.subscribe(()=> this.getNotifications());
  }

  getNotifications(){
    this.notificationsService.getNotifications()?.then(notifs=> this.notifications = notifs?.sort((a:Notification,b:Notification)=> (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0)) ?? []);
  }

  handleRefresh(event: any) {
    this.getNotifications();
    event.target.complete();
  }

  markAsReaded(id: number | string){
    this.notificationsService.markAsReaded(id);
  }

  delete(id: number | string){
    this.notificationsService.deleteNotification(id);
  }
}
