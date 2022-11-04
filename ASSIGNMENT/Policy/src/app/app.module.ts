import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicyHomeComponent } from './policy-home/policy-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PolScreenDilogueComponent } from './pol-screen-dilogue/pol-screen-dilogue.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';
import { routings } from './app-routing.module';
import { PolicyServiceService } from './policy-service.service';
import{HttpClientModule} from '@angular/common/http';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddAdminDilogComponent } from './add-admin-dilog/add-admin-dilog.component'




@NgModule({
  declarations: [
    AppComponent,
    PolicyHomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PolScreenDilogueComponent,
    ForgotComponent,
    routings,
    ChangePasswordComponent,
    AddAdminDilogComponent
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
  providers: [PolicyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
