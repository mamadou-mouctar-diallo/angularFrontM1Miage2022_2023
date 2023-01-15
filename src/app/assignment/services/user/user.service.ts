import {Injectable, OnInit} from "@angular/core";
import {Crud} from "../../interfaces/crud";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {URL} from "../../utils/utils";
import {Observable} from "rxjs";
import {configAssignment} from "../assignment/assignment.service";

export interface configUser {
  modalOpened: boolean,
  user: any

};
@Injectable({
  providedIn: "root"
})

export class UserService implements OnInit{

  configUserToEdit!: configUser;
private prefix: string = "/users";
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<User[]> {
   return  this.http.get<User[]>(URL+this.prefix);
  }

  deleteUser(id: any): Observable<any>{
    return this.http.delete<any>(URL+this.prefix+'/delete/'+id);
  }
  generateId(): string{
    let id = 'uvd'+Date.now();
    return id;
  }

  add(user: User): Observable<any> {
    return this.http.post<any>(URL+this.prefix+'/add', user);
  }

  updateUser(user:any): Observable<any> {
    return this.http.put<any>(URL+this.prefix+'/update/'+user._id, user);
  }
  ngOnInit(): void {
  }

}
