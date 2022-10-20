import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { HttpCustomerComponent } from './http-customer/http-customer.component'
import { DemoService } from './demo.service';


@NgModule({
  declarations: [
    AppComponent,
    HttpCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
