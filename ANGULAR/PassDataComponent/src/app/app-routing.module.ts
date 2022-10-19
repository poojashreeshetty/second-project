import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';

const routes: Routes = [
  {path:'demo',component:DemoComponent},
  {path:'demo1',component:Demo1Component},
  {path:'',component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
