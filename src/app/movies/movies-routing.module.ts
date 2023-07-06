import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPage } from './movies.page';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage,
  },
  {
    path: ':id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesPageRoutingModule {}
