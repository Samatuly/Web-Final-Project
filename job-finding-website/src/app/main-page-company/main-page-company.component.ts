import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {VacanciesService} from "../vacancies.service";

@Component({
  selector: 'app-main-page-company',
  templateUrl: './main-page-company.component.html',
  styleUrls: ['./main-page-company.component.css']
})
export class MainPageCompanyComponent implements OnInit{
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  query: string = '';
  constructor(private route: ActivatedRoute, private service: VacanciesService) {}

  ngOnInit(){
    this.getAllCompanies()
  }

  getAllCompanies() {
    this.service.getCompanies().subscribe((data) => (this.companies = data));
  }

  searchCompanies(query: string) {
    this.service.getSearchCompanies(query).subscribe((data) => this.companies = data);
  }
}
