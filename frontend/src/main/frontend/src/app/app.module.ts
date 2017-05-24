import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routes } from './app.routes';


import {
  RouterModule,
  Routes
} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],


  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ], bootstrap: [AppComponent]
})
export class AppModule { }
