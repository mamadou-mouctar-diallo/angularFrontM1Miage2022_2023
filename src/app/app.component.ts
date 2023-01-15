import {Component} from '@angular/core';
import {LoaderService} from "./assignment/services/loader.service";
import {ConfigService} from "./assignment/services/config.service";
import {AuthService} from "./assignment/services/auth/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(public _loader: LoaderService, private configService: ConfigService, public authService: AuthService) {
  // this.authService.sessionDistory();
  }
  onResizeWindow(){
    this.configService.isMobile();
  }

}
