import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MainPageComponent} from "../main-page/main-page.component";

@Component({
  selector: 'app-warning-box',
  templateUrl: './warning-box.component.html',
  styleUrls: ['./warning-box.component.css']
})
export class WarningBoxComponent {
  constructor(private service: VacanciesService, private mainComponent: MainPageComponent) {

  }
  cancelWarning() {
    this.mainComponent.showWarningBox = !this.mainComponent.showWarningBox
  }

  responseWarning(){
    //There should be function of the button
    this.mainComponent.showWarningBox = !this.mainComponent.showWarningBox
  }
}
