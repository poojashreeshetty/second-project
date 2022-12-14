import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { PolicyHomeComponent } from './policy-home/policy-home.component';


const routes: Routes = [
  {path:'password',component:ForgotComponent},
  {path: '' , component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path:'policyHome',component:PolicyHomeComponent},
  {path:'changePwd',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routings=[ForgotComponent,LoginComponent,ChangePasswordComponent]
