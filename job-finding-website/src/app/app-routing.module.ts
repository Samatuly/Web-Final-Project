import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginAsEmployeeComponent} from "./login-as-employee/login-as-employee.component";
import {LoginAsEmployerComponent} from "./login-as-employer/login-as-employer.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AfterSignInComponent} from "./after-sign-in/after-sign-in.component";
import {AfterSignInAdminComponent} from "./after-sign-in-employer/after-sign-in-admin.component";
import {RegistrationAdminComponent} from "./registration-employer/registration-admin.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginAsEmployeeComponent},
  {path: 'login_employer', component: LoginAsEmployerComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'registration-employer', component:RegistrationAdminComponent},
  {path: 'after-sign-in', component: AfterSignInComponent},
  {path: 'after-sign-in-employer', component: AfterSignInAdminComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
