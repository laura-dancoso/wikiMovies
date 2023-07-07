import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionPerformed,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';
import { RouteTabs } from 'src/app/enums/tabs-enum';
import { StorageService } from '../../shared/storage.service';
import { Notification, defaultNotif } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  token: string = '';
  notificationEmitedEvent = new EventEmitter<any>();

  constructor(private platform: Platform, private router: Router, private storageService: StorageService) { 
  }

  initiateNotifications(){
    if(this.platform.is('capacitor')){
      this.addListeners();
      PushNotifications.checkPermissions().then(result=>{
        if(result.receive === 'granted')
        {
          PushNotifications.register();
        }else{
          PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
              PushNotifications.register();
            } else {
              console.error('User denied permissions!');
            }
          });
        }
      })
  }
  }

  addListeners(){
    PushNotifications.addListener('registration', (token: Token) => {
      this.token = token.value;
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      console.error('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        let notif: Notification[] = [];
        this.storageService.get('notifications')?.then(notifs=>{
          notif = notifs ?? [];
          notif.push({ 
            id: notification.notification.id ?? `${defaultNotif.id}-${new Date().getMilliseconds}`, 
            readed: false, 
            title: notification.notification?.data?.title ?? defaultNotif.title,
            subtitle: notification.notification?.data?.subtitle ?? defaultNotif.subtitle,
            date: notification.notification?.data?.date ?? new Date()})
          this.storageService.set('notifications', notif)?.then(()=>{
            this.notificationEmitedEvent.emit();
            this.router.navigate([`/${RouteTabs.Notifications}`]);
          }
          );
        });
      },
    );
  }

  getNotifications(){
    return this.storageService.get('notifications');
  }

  deleteNotification(id: string | number){
    let notif: Notification[] = [];
    this.storageService.get('notifications')?.then(notifs=>{
      notif = notifs?.filter((n: Notification)=>n.id != id) ?? [];
      this.storageService.set('notifications', notif)?.then(()=>
      this.notificationEmitedEvent.emit()
      );
    });
  }

  markAsReaded(id: string | number){
    let notif: Notification[] = [];
    this.storageService.get('notifications')?.then(notifs=>{
      notif = notifs?.map((n: Notification)=>{
        if(n.id == id) n.readed = true;
        return n;
      }) ?? [];
      this.storageService.set('notifications', notif)?.then(()=>
      this.notificationEmitedEvent.emit()
      );
    });
  }
}