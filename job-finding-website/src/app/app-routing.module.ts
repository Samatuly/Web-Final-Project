import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginAsEmployeeComponent} from "./login-as-employee/login-as-employee.component";
import {LoginAsEmployerComponent} from "./login-as-employer/login-as-employer.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AfterSignInComponent} from "./after-sign-in/after-sign-in.component";
import {AfterSignInAdminComponent} from "./after-sign-in-employer/after-sign-in-admin.component";
import {RegistrationAdminComponent} from "./registration-employer/registration-admin.component";
import {TopBarAfterComponent} from "./top-bar-after/top-bar-after.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileEmployerComponent} from "./profile-employer/profile-employer.component";
import {TopBarAfterEmployerComponent} from "./top-bar-after-employer/top-bar-after-employer.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'top-bar', component:TopBarComponent},
  {path: 'login', component: LoginAsEmployeeComponent},
  {path: 'login_employer', component: LoginAsEmployerComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'registration-employer', component:RegistrationAdminComponent},
  {path: 'after-sign-in', component: AfterSignInComponent},
  {path: 'after-sign-in-employer', component: AfterSignInAdminComponent},
  {path: 'top-bar-after', component:TopBarAfterComponent},
  {path: 'top-bar-after-employer', component: TopBarAfterEmployerComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile-employer', component:ProfileEmployerComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
