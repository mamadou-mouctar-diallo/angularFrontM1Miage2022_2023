import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth/auth.service";

@Injectable()
export class LoginGuard implements CanActivate{
  constructor(private authService: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isSessionUp = this.authService.isUserLogged();
    if(isSessionUp){
      this._router.navigate(['']);
    }
    return isSessionUp;
  }

}
