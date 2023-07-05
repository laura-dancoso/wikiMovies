
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './movies/components/filter/filter.component';
import { SearchMovieComponent } from './movies/components/search-movie/search-movie.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)

  },
  {
    path: 'search-movie',
   component: SearchMovieComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
