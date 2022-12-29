import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleTestComponent } from './module-test/module-test.component';
import { SeallOngoingComponent } from './seall-ongoing/seall-ongoing.component';
import { TopBusComponent } from './top-bus/top-bus.component';
import { TopDesComponent } from './top-des/top-des.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ogoing', component: SeallOngoingComponent },
  { path: 'course', component: CourseOverviewComponent },
  { path: 'top-bus', component: TopBusComponent },
  { path: 'top-des', component: TopDesComponent },
  { path: 'test', component: ModuleTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
