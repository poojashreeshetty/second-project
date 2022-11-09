import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

const materialComponent: any = [MatIconModule, FormsModule];
@NgModule({
  exports: [materialComponent],
  imports: [materialComponent],
})
export class MaterialModule {}
