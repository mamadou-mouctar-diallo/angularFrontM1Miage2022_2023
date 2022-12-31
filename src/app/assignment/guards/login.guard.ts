import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import {SessionService} from "../services/session.service";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate{
  constructor(private _session: SessionService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isSessionUp = this._session.isSessionUp();
    if(isSessionUp){
      this._router.navigate(['']);
    }
    return isSessionUp;
  }

}
