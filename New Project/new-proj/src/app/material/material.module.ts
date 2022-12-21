import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'

const material = [MatInputModule,CommonModule,MatIconModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
