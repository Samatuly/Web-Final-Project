import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {VacanciesService} from "../vacancies.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  public showWarningBox = false;
  vacancies: Vacancy[];
  query: string;
  constructor(private route: ActivatedRoute, private service: VacanciesService) {
    this.vacancies = [];
    this.query = '';
  }

  ngOnInit(){
    this.getAllVacancies()
  }

  getAllVacancies() {
    this.service.getVacancies().subscribe((data) => (this.vacancies = data));
  }

  searchVacancies(query: string) {
    this.service.getSearchVacancies(query).subscribe((data) => this.vacancies = data);
  }

  showWarning() {
    this.showWarningBox = true;
  }
}
