import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker';


const materialComponent:any=[
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatDatepickerModule

]

@NgModule({
  exports:[materialComponent],
  imports: [materialComponent
    
  ]
})
export class MaterialModule { }
