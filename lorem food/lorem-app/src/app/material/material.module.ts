import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

const material = [
  CommonModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule
];

@NgModule({

  imports: [material],
  exports: [material]
})
export class MaterialModule { }