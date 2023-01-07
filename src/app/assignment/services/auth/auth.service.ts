import {Injectable} from "@angular/core";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL} from "../../utils/utils";
import jwt_decode from 'jwt-decode';
import {ProtectService} from "../protect.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient, private protectService: ProtectService) {
  }

  isUserLogged(): boolean {
    return localStorage.getItem('token') != null;
  }
  makeSession(obj: any): Observable<any>{
   return  this.http.post<any>(URL+"/users/login", obj);
  }
  public sessionDistory(){
   localStorage.clear();
   this.router.navigate(['connect']).then(r => console.log(r))
  }

  isUserAdmin(user: User): boolean {
    return user.role?.trim() == "admin";
  }
  isUserAuthorized(): boolean{
    let token = localStorage.getItem('token') || "vide";
    const decodeToken: any = this.decodeTheToken(token);
    console.log(decodeToken)
    if(decodeToken !== null){
      if(decodeToken.role === "admin"){
          return true
      }
    }
    return false;
  }

  getToken(): string{
    return localStorage.getItem('token') || 'vide';
  }

  decodeTheToken(token: string){
    try {
      return jwt_decode(token);
    }catch (err) {
      return null
    }
  }
}
