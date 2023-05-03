import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken, Company, Vacancy} from "./models";
import {VacancyDetailComponent} from "./vacancy-detail/vacancy-detail.component";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private client: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`);
  }
  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies`);
  }
  getSearchVacancies(query:string):Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/search-v/?q=${query}`);
  }
  getSearchCompanies(query:string):Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/api/search-c/?q=${query}`);
  }
  getCompanyVacancies(id:any):Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`)
  }
  getVacancyDetail(id:any):Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/${id}/`)
  }


  login(username: string, password: string):Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/api/login/`, {username, password})
  }
}
