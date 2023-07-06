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

  constructor(private platform: Platform, private router: Router, private storageService: StorageService) { }
  
  
  getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);
  }
  
  initiateNotifications(){
    this.addListeners();
    if(this.platform.is('capacitor')){
      PushNotifications.checkPermissions().then(result=>{
        if(result.receive === 'granted')
        {
          PushNotifications.register();
        }else{
          PushNotifications.requestPermissions().then(result => {
            console.log('PushNotifications.requestPermissions()')
            if (result.receive === 'granted') {
              PushNotifications.register();
            } else {
              throw new Error('User denied permissions!');
            }
          });
        }
      })
  }
  }

  addListeners(){
    PushNotifications.addListener('registration', (token: Token) => {
      this.token = token.value;
      console.log('Push registration success, token: ' + token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        console.log('Push action performed in second plane: ' + JSON.stringify(notification));
        let notif: Notification[] = [];
        this.storageService.get('notifications')?.then(notifs=>{
          notif = notifs ?? [];
          notif.push({title: notification.notification?.data?.title ?? defaultNotif.title, subtitle: notification.notification?.data?.subtitle ?? defaultNotif.subtitle, date: notification.notification?.data?.date ?? new Date()})
          this.storageService.set('notifications', notif);
          this.notificationEmitedEvent.emit();
          this.router.navigate([`/${RouteTabs.Notifications}`]);
        });
      },
    );
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification) => {
        console.log('Push pushNotificationReceived in second plane: ' + JSON.stringify(notification));
        this.router.navigate([`/${RouteTabs.Movies}`]);
      },
    );  
  }
}