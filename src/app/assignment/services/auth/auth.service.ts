import {Injectable} from "@angular/core";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL} from "../../utils/utils";
import jwt_decode from 'jwt-decode';
import {ProtectService} from "../protect.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  displayModalAuthorization: boolean = false;

  constructor(private router: Router, private http: HttpClient, private protectService: ProtectService) {
  }

  isUserLogged(): boolean {
    return localStorage.getItem('token') != null;
  }
  makeSession(obj: any): Observable<any>{
   return  this.http.post<any>(URL+"/users/login", obj);
  }
  public sessionDistory(){
   if (this.isTokenExpired()){
     localStorage.clear();
     console.log(this.isTokenExpired())
   }
  }

  isUserAdmin(user: User): boolean {
    return user.role?.trim() == "admin";
  }
  isUserAuthorized(): boolean{
    let token = this.getToken();
    const decodeToken: any = this.decodeTheToken(token);
    console.log(decodeToken.exp)
    if(decodeToken !== null){
      return decodeToken.role === "admin";
    }
    return false;
  }

  private isTokenExpired(): boolean{
    const token: any = this.decodeTheToken(this.getToken());
    if(token === null) return false;
    return Math.floor((new Date).getTime() / 10) >= token.exp;
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

  closeModalAuthorization(): void{
    this.displayModalAuthorization = false;
  }
  showAuthorization(): void{
    this.displayModalAuthorization = true;
  }
}
