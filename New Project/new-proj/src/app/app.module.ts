import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { SeallOngoingComponent } from './seall-ongoing/seall-ongoing.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { TopBusComponent } from './top-bus/top-bus.component';
import { TopDesComponent } from './top-des/top-des.component';
import { ModuleTestComponent } from './module-test/module-test.component';
import { SubmitDilogComponent } from './submit-dilog/submit-dilog.component';
import { CongratsComponent } from './congrats/congrats.component';
import { ResultsComponent } from './results/results.component';
import { ResultDilogueComponent } from './result-dilogue/result-dilogue.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    CourseOverviewComponent,
    SeallOngoingComponent,
    TopBusComponent,
    TopDesComponent,
    ModuleTestComponent,
    SubmitDilogComponent,
    CongratsComponent,
    ResultsComponent,
    ResultDilogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
