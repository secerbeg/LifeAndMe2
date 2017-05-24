import { DashboardRoutes } from './dashboard/dashboard.routes';
import { Routes } from '@angular/router';
import { LoginRoutes } from './login/index';
import { HomepageComponent } from './homepage/index';
import { RegisterRoutes } from './register/register.routes';

export const routes: Routes = [
  ...LoginRoutes,
  ...RegisterRoutes,
  ...DashboardRoutes,
  { path: '**', component: HomepageComponent }
];
