import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FilmsComponent } from './films/films.component';
import { SpiciesComponent } from './spicies/spicies.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';
import { StartshipComponent } from './startship/startship.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    FilmsComponent,
    SpiciesComponent,
    PlanetsComponent,
    PeopleComponent,
    StartshipComponent,
    VehiclesComponent,
    NavbarComponent,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
