import { Component } from '@angular/core';
import { NameTabs, RouteTabs } from '../enums/tabs-enum';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tabs = NameTabs;
  routeTabs = RouteTabs;
  
  constructor() {}

}
