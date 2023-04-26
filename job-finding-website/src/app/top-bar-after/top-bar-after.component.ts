import { Component } from '@angular/core';
import {VacanciesService} from "../vacancies.service";

@Component({
  selector: 'app-top-bar-after',
  templateUrl: './top-bar-after.component.html',
  styleUrls: ['./top-bar-after.component.css']
})
export class TopBarAfterComponent {
  logged: boolean = true

  constructor(private service: VacanciesService) {}
  logout(){
    localStorage.removeItem('token');
    this.logged = false;
  }
}
