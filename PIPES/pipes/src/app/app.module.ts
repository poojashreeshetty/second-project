import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { AgePipe } from './pipes/age.pipe';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipesComponent,
    AgePipe,
    UsdInrPipe,
    ReversePipe,
    
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
