import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private client: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`);
  }
  getCompanyVacancies(id:any):Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`)
  }
  getSearchVacancies(query:String):Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/search/?q=${query}`);
  }
}
