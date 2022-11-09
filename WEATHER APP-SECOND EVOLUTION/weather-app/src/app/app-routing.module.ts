import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
import { WeatherHomeComponent } from './weather-home/weather-home.component';

const routes: Routes = [
  { path: '', component: WeatherHomeComponent },
  { path: 'weather-home', component: WeatherHomeComponent },
  { path: 'favourite', component: FavoriteComponent },
  { path: 'recent-serach', component: RecentSearchComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
