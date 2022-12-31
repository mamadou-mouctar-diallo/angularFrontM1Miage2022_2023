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
export class LoginService {
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJkaWFsbG8zOUB5YWhvby5mciIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjcyNDQ1Mjg0LCJleHAiOjE2NzI0NDg4ODR9.Y_lqlwA3L31kwGAC08SaPzA77vPraGOnEaHJ4r8YvI8"
  constructor(private router: Router, private http: HttpClient, private protectService: ProtectService) {
  }
  httpHeaders(token: string){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    }
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

  decodeTheToken(token: string){
    try {
      return jwt_decode(token);
    }catch (err) {
      return null
    }
  }
}
