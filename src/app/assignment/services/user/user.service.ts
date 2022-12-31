import {Injectable, OnInit} from "@angular/core";
import {Crud} from "../../interfaces/crud";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {URL} from "../../utils/utils";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class UserService implements Crud, OnInit{
private prefix: string = "/users";
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<User[]> {
   return  this.http.get<User[]>(URL+this.prefix);
  }

  delete(): any {
  }

  add(user: User): Observable<any> {
    return this.http.post<any>(URL+this.prefix, user);
  }

  getOne(): any {
  }

  update(): any {
  }

  ngOnInit(): void {
  }

}
