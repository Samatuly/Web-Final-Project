import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {VacanciesService} from "../vacancies.service";

@Component({
  selector: 'app-after-sign-in',
  templateUrl: './after-sign-in.component.html',
  styleUrls: ['./after-sign-in.component.css']
})
export class AfterSignInComponent implements OnInit{
  vacancies: Vacancy[] = [];
  query: string = '';
  logged: boolean = true;
  constructor(private route: ActivatedRoute, private service: VacanciesService) {}

  ngOnInit(){
    this.getAllVacancies()
  }

  getAllVacancies() {
    this.service.getVacancies().subscribe((data) => (this.vacancies = data));
  }

  searchVacancies(query: string) {
    this.service.getSearchVacancies(query).subscribe((data) => this.vacancies = data);
  }

  logout(){
    localStorage.removeItem('token');
    this.logged = false;
  }

}
