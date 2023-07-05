import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@capacitor/local-notifications';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';
import { RouteTabs } from 'src/app/enums/tabs-enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  token: string = '';

  constructor(private platform: Platform, private router: Router) { }

  
  getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);
  }

  initiateNotifications(){
    if(this.platform.is('capacitor')){
      PushNotifications.requestPermissions().then(result => {
        console.log('PushNotifications.requestPermissions()')
        if (result.receive === 'granted') {
          PushNotifications.register();
          this.addListeners();
        } else {

          throw new Error('User denied permissions!');
        }
      });
      
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

    //primer plano
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        console.log('Push received: ' + JSON.stringify(notification));
        LocalNotifications.schedule({
          notifications:[
            {
              title: notification.title!,
              body: notification.body!,
              id: 1,
              extra: { data: notification.data}
            }
          ]
        })
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        console.log('Push action performed in second plane: ' + JSON.stringify(notification));
        this.router.navigate([`/${RouteTabs.Movies}`]);
      },
    );
    LocalNotifications.addListener('localNotificationReceived', notification=>{
      console.log('Push action performed: ' + JSON.stringify(notification));
      this.router.navigate([`/${RouteTabs.Movies}/2`]);
    })
  }
}
