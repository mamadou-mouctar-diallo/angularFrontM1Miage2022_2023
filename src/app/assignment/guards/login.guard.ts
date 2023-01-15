import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth/auth.service";
import {ConfigService} from "../services/config.service";

@Injectable()
export class LoginGuard implements CanActivate{
  constructor(private authService: AuthService, private _router: Router,private configService: ConfigService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isSessionUp = this.authService.isUserLogged();
    const user: any = this.authService.decodeTheToken(this.authService.getToken())
    if(user !== null && !this.authService.isUserAdmin(user) && route.routeConfig?.path === "users"){
      this.configService.modalAutorization = true;
      return false;
    }
    if(!isSessionUp){
      this._router.navigate(['']);
    }
    return isSessionUp;
  }

}
