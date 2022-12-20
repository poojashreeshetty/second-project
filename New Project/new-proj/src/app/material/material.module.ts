import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
const material = [MatInputModule,CommonModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
