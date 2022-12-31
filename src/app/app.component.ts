import {Component} from '@angular/core';
import {LoaderService} from "./assignment/services/loader.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(public _loader: LoaderService) {
  }

}
