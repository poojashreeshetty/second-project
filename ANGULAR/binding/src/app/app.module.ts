import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolComponent } from './interpol/interpol.component';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolComponent,
    TwowaybindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
