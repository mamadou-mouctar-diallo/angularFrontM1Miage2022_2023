import {Injectable} from "@angular/core";
import {LoginService} from "./login/login.service";

@Injectable({
  providedIn: "root"
})

export class SessionService {
  constructor(private _login: LoginService) {
  }

  isSessionUp(): boolean{
    return this._login.isUserLogged();
  }

  sessionDistroy(): void{
    return this._login.sessionDistory();
  }

}
