import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAsEmployerComponent } from './login-as-employer/login-as-employer.component';
import { LoginAsEmployeeComponent } from './login-as-employee/login-as-employee.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAsEmployerComponent,
    LoginAsEmployeeComponent,
    MainPageComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
