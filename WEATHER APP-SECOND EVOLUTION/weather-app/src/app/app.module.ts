import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { HeaderComponent } from './header/header.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RemoveAllDilogueComponent } from './remove-all-dilogue/remove-all-dilogue.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
import { ClearAllDilogueComponent } from './clear-all-dilogue/clear-all-dilogue.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    HeaderComponent,
    FavoriteComponent,
    RemoveAllDilogueComponent,
    RecentSearchComponent,
    ClearAllDilogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
