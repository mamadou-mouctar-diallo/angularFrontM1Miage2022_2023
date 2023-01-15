import {Injectable} from "@angular/core";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL} from "../../utils/utils";
import jwt_decode from 'jwt-decode';
import {ProtectService} from "../protect.service";
import {an} from "chart.js/dist/chunks/helpers.core";
import {ConfigService} from "../config.service";
import {AssignmentService} from "../assignment/assignment.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  displayModalAuthorization: boolean = false;
  constructor(private router: Router, private http: HttpClient, private assignmentService: AssignmentService) {

  }
  makeSession(obj: any): Observable<any>{
   return  this.http.post<any>(URL+"/users/login", obj);
  }
  public sessionDistory(){
    const decodeToken: any = this.decodeTheToken(this.getToken());
    if(decodeToken !== null){
      setTimeout(() => {
        localStorage.clear();
        this.router.navigate(['connect']).then(res => console.log(res));
      }, decodeToken.exp);
    }
  }

  isUserLogged(): boolean {
    return localStorage.getItem('token') != null;
  }
  getActualUser():any{
    let token=this.getToken();
    const user: any = this.decodeTheToken(token);
    if(user!==null){
      return user;
    }
    else{
      return undefined;
    }
  }
  private isTokenExpired(): boolean{
    const token: any = this.decodeTheToken(this.getToken());
    if(token === null) return false;
    // return Math.floor((new Date).getTime()/60000) >= Math.floor(token.exp/60);
    return false;
  }

  isUserAdmin(user: User): boolean {
    return user.role?.trim().toLowerCase() == "admin";
  }

  public getToken(): string{
    return localStorage.getItem('token') || 'vide';
  }
  public decodeTheToken(token: string){
    try {
      return jwt_decode(token);
    }catch (err) {
      return null
    }
  }

  closeModalAuthorization(): void{
    this.displayModalAuthorization = false;
    this.assignmentService.initConfigAssignmentToDelete();
    this.assignmentService.initConfigAssignmentToEdit();
  }
  showAuthorization(): void{
    this.displayModalAuthorization = true;
  }
}
