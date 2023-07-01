import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RouteTabs } from '../enums/tabs-enum';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: RouteTabs.Notifications,
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: RouteTabs.Movies,
        loadChildren: () => import('../movies/movies.module').then(m => m.MoviesPageModule)
      },
      {
        path: RouteTabs.Settings,
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: `/${RouteTabs.Movies}`,
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: `/${RouteTabs.Movies}`,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
