import {Injectable, OnInit} from "@angular/core";
import {Assignment} from "../../models/assignment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Crud} from "../../interfaces/crud";
import {URL} from "../../utils/utils";

@Injectable()
export class AssignmentService implements Crud, OnInit{
  assignments!: any [];
  assignmentsPrepared!: Assignment [];
  assignmentTemp!: Assignment;
  URL!: string;
  prefix: string = "/assignments";
  constructor(private http: HttpClient) {
    this.URL = URL;
  }

  add() {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    getOne() {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }

  ngOnInit(): void {
    this.getAssignments().subscribe(assignments => this.assignments = assignments);
  }
  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.URL+this.prefix);
  }

  generateId(): string{
    let id = 'avd'+Date.now();
    return id;
  }

  getOneAssignment(idAssignment: String): Observable<Assignment>{
    return this.http.get<Assignment>(this.URL);
  }

  upDateAssignment(assignment: Assignment): Observable<any>{
    console.log(assignment)
    return this.http.put<any>(URL+this.prefix+'/update/'+assignment._id, assignment);
  };
  addAssignment(assignment : Assignment): Observable<String> {
     return this.http.post<String>(this.URL, assignment);
  }

}
