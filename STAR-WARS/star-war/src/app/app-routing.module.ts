import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpiciesComponent } from './spicies/spicies.component';
import { StartshipComponent } from './startship/startship.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films-character', component: FilmsComponent },
  { path: 'spicies-character', component: SpiciesComponent },
  { path: 'plantes-character', component: PlanetsComponent },
  { path: 'people-character', component: PeopleComponent },
  { path: 'straship-character', component: StartshipComponent },
  { path: 'vehicles-character', component: VehiclesComponent },

  { path: 'films-details', component: PeopleDetailsComponent },
  { path: 'spicies-details', component: PeopleDetailsComponent },
  { path: 'plantes-details', component: PeopleDetailsComponent },
  { path: 'people-details', component: PeopleDetailsComponent },
  { path: 'straship-details', component: PeopleDetailsComponent },
  { path: 'vehicles-details', component: PeopleDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
