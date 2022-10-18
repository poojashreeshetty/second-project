import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {  MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

 

const MaterialComponents=[
  MatButtonModule,
  MatCheckboxModule,
  FormsModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule
]


@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  // ]

})
export class MaterialModule { }
