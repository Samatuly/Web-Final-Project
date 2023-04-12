import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAsEmployerComponent } from './login-as-employer/login-as-employer.component';
import { LoginAsEmployeeComponent } from './login-as-employee/login-as-employee.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AfterSignInComponent } from './after-sign-in/after-sign-in.component';
import { AfterSignInAdminComponent } from './after-sign-in-employer/after-sign-in-admin.component';
import { RegistrationAdminComponent } from './registration-employer/registration-admin.component';
import { TopBarAfterComponent } from './top-bar-after/top-bar-after.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEmployerComponent } from './profile-employer/profile-employer.component';
import { TopBarAfterEmployerComponent } from './top-bar-after-employer/top-bar-after-employer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAsEmployerComponent,
    LoginAsEmployeeComponent,
    MainPageComponent,
    RegistrationComponent,
    TopBarComponent,
    AfterSignInComponent,
    AfterSignInAdminComponent,
    RegistrationAdminComponent,
    TopBarAfterComponent,
    ProfileComponent,
    ProfileEmployerComponent,
    TopBarAfterEmployerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
