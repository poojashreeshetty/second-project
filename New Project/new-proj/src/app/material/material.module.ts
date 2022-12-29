import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';

const material = [MatInputModule,CommonModule,MatIconModule,MatDialogModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
