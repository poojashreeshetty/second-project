import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button'; 


const materialComponent:any=[
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatDatepickerModule,
  MatButtonModule

]

@NgModule({
  exports:[materialComponent],
  imports: [materialComponent
    
  ]
})
export class MaterialModule { }
