import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { HttpCustomerComponent } from './http-customer/http-customer.component'
import { DemoService } from './demo.service';
import { HttpPostComponent } from './http-post/http-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpCustomerComponent,
    HttpPostComponent
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
