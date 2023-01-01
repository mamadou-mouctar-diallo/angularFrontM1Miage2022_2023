import {Injectable} from "@angular/core";
import {AuthService} from "./auth/auth.service";

@Injectable({
  providedIn: "root"
})

export class SessionService {
  constructor(private _login: AuthService) {
  }

  isSessionUp(): boolean{
    return this._login.isUserLogged();
  }

  sessionDistroy(): void{
    return this._login.sessionDistory();
  }

}
