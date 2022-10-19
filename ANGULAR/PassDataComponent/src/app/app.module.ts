import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { DemoService } from './demo.service';
import { NgOnChangeComponent } from './ng-on-change/ng-on-change.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SecondChildComponent,
    DemoComponent,
    Demo1Component,
    NgOnChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
