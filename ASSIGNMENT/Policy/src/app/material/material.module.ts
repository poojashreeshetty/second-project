import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog';


const materialComponent:any=[
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatDatepickerModule,
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule,
  MatDialogModule
  

]

@NgModule({
  exports:[materialComponent],
  imports: [materialComponent
    
  ]
})
export class MaterialModule { }
