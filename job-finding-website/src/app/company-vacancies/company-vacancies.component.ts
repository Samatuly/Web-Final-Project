import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {VacanciesService} from "../vacancies.service";

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit{
  vacancies: Vacancy[] = [];
  company_id: number = 0;
  constructor(private route: ActivatedRoute, private service: VacanciesService) {}

  ngOnInit(){
    this.company_id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCompanyVacancies(this.company_id)
  }

  getCompanyVacancies(id:number){
    this.service.getCompanyVacancies(id).subscribe((data) => {
      this.vacancies = data;
    })
  }
}
