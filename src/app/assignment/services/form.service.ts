import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class FormService implements OnInit{
  assignmentToAdd: any = {
    name: '',
    deadLine: '',
    rendered: false,
    author: '',
    course: {
      name: '',
      coursePhoto: '',
      teacherPhoto: ''
    },
    mark: '',
    comment: ''
  };
  constructor() {
  }

  ngOnInit(): void {
  }


  isValidfieldAssignment(): boolean{
    return this.assignmentToAdd.name !== "" && this.assignmentToAdd.deadLine !== ""
  }

  isValidfieldStudent() {
    return this.assignmentToAdd.author !== "";
  }
  isSelectedCourse(): boolean{
    return this.assignmentToAdd.course.name !== "";
  }
}
