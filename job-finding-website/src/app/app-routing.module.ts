import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginAsEmployeeComponent} from "./login-as-employee/login-as-employee.component";
import {LoginAsEmployerComponent} from "./login-as-employer/login-as-employer.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login_employee', component: LoginAsEmployeeComponent},
  {path: 'login_employer', component: LoginAsEmployerComponent},
  {path: 'main_page', component: MainPageComponent},
  {path: 'signup', component: RegistrationComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
