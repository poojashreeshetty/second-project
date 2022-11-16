import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
let url: any;
url = JSON.parse(localStorage.getItem('url') as any);

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'recent-serach', component: RecentSearchComponent },
  { path: ' ', redirectTo: url, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
