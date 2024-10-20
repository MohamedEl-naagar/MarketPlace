import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistributorComponent} from './distributor/distributor.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'distributor', component: DistributorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
