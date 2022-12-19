import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Face1Component } from './face1/face1.component';
import { Face23Component } from './face23/face23.component';
import { MaterialModule } from './material/material.module';
import { ApplicationFace5Component } from './application-face5/application-face5.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrandsNearbyComponent } from './brands-nearby/brands-nearby.component';
import { Face4Component } from './face4/face4.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LogindialogComponent } from './logindialog/logindialog.component';



import { Face3Component } from './face3/face3.component';
import { CreateAnAccDialogComponent } from './create-an-acc-dialog/create-an-acc-dialog.component';
import { GetOtpService } from './service/get-otp.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationFace5Component,
    BrandsNearbyComponent,
    Face1Component,
    Face23Component,
    ApplicationFace5Component,
    Face4Component,
    FooterComponent,
    LogindialogComponent,
    Face3Component,
    CreateAnAccDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [GetOtpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
