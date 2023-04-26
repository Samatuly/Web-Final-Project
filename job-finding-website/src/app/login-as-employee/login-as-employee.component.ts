import {Component, OnInit} from '@angular/core';
import {VacanciesService} from "../vacancies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login-as-employee',
  templateUrl: './login-as-employee.component.html',
  styleUrls: ['./login-as-employee.component.css']
})
export class LoginAsEmployeeComponent implements OnInit{

  logged: boolean = false;
  username: string;
  password: string;
  constructor(private route: ActivatedRoute, private service: VacanciesService) {
    this.username = 'serikbolsyn';
    this.password = 'Serik_2004';
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  login(){
    this.service.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

}
