import {Component, OnChanges, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {VacanciesService} from "../vacancies.service";
import {query} from "@angular/animations";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnChanges{
  vacancies: Vacancy[];
  filteredVacancies: Vacancy[] | undefined;
  searchQuery: string;
  constructor(
      private route: ActivatedRoute,
      private service: VacanciesService
  ) {
    this.vacancies = [];
    let filteredVacancies = [];
    this.searchQuery = '';
  }

  ngOnInit() {
    this.service.getSearchVacancies(this.searchQuery).subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.filterListings();
    });
  }

  ngOnChanges(){
    this.filterListings();
  }

  filterListings() {
    this.filteredVacancies = this.vacancies.filter((listing) =>
        listing.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
