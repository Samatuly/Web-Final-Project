import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {VacanciesService} from "../vacancies.service";
import { OrderByPipe } from 'ngx-pipes';


@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css'],
  providers: [OrderByPipe],
})
export class VacancyDetailComponent implements OnInit{
  vacancy: Vacancy[] = [];
  vacancy_id: number = 0;

  constructor(private route: ActivatedRoute, private service: VacanciesService) {}

  ngOnInit(){
    this.vacancy_id = Number(this.route.snapshot.paramMap.get('id'));
    this.getVacancyDetail(this.vacancy_id)
  }
  getVacancyDetail(id: number){
    this.service.getVacancyDetail(id).subscribe((data) => {
      this.vacancy = data;
    });
  }
}
