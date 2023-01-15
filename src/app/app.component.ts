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
  constructor(public _loader: LoaderService, public configService: ConfigService, public authService: AuthService) {
  }
  onResizeWindow(){
    this.configService.isMobile();
  }

}
