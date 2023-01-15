import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL} from "../utils/utils"

@Injectable({
  providedIn: 'root'
})

export class UtilService {
  constructor(private http: HttpClient) {
  }

  getLocalStudents(): Observable<any>{
    return this.http.get<any>('assets/demo/data/students.json')
  }
  getLocalCourses(): Observable<any>{
    return this.http.get<any>('assets/demo/data/courses.json')
  }

  public addStudent(student: any): Observable<any>{
    return this.http.post<any>(URL+'/studens', student);
  }
  public getStudents(): Observable<any>{
    return this.http.get<any>(URL+'/students');
  }
  public addCourse(student: any): Observable<any>{
    return this.http.post<any>(URL+'/courses', student);
  }
  public getCourses(): Observable<any>{
    return this.http.get<any>(URL+'/courses');
  }
}
