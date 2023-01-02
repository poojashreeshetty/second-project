import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CongratsGaurdGuard } from './congrats-gaurd.guard';
import { CongratsComponent } from './congrats/congrats.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleTestComponent } from './module-test/module-test.component';
import { OnseallComponent } from './onseall/onseall.component';
import { ResultsComponent } from './results/results.component';
import { SeallOngoingComponent } from './seall-ongoing/seall-ongoing.component';
import { TestGaurdGuard } from './test-gaurd.guard';
import { TopBusComponent } from './top-bus/top-bus.component';
import { TopDesComponent } from './top-des/top-des.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,canActivate: [ AuthGuard ] },
  { path: 'ogoing', component: SeallOngoingComponent },
  { path: 'course', component: CourseOverviewComponent },
  { path: 'top-bus', component: TopBusComponent },
  { path: 'top-des', component: TopDesComponent },
  { path: 'test', component: ModuleTestComponent,canActivate:[TestGaurdGuard] },
  { path: 'congrats', component: CongratsComponent,canActivate:[CongratsGaurdGuard] },
  { path: 'result', component: ResultsComponent, canActivate:[CongratsGaurdGuard]},
  { path: 'on', component: OnseallComponent}

  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
