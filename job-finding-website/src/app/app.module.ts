import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
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
import { CreateEmployerComponent } from './create-employer/create-employer.component';
import { MyVacanciesEmployerComponent } from './my-vacancies-employer/my-vacancies-employer.component';
import { CandidatesEmployerComponent } from './candidates-employer/candidates-employer.component';
import {RouterLink} from "@angular/router";
import { SearchPageComponent } from './search-page/search-page.component';
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./AuthInterceptor";
import { MainPageCompanyComponent } from './main-page-company/main-page-company.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import {NgArrayPipesModule} from "ngx-pipes";
import { WarningBoxComponent } from './warning-box/warning-box.component';


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
    CreateEmployerComponent,
    MyVacanciesEmployerComponent,
    CandidatesEmployerComponent,
    SearchPageComponent,
    MainPageCompanyComponent,
    CompanyVacanciesComponent,
    VacancyDetailComponent,
    WarningBoxComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientXsrfModule,
        RouterLink,
        FormsModule,
        NgArrayPipesModule
    ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
