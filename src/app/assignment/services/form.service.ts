import {Injectable, OnInit} from "@angular/core";
import {Table} from "primeng/table";

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
  sortOrder!: number;
  sortField!: string;
  messageAdd!: String;
  isAddedAssignment: boolean = false;
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
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  initSortField(): void {
    this.sortOrder = 0;
    this.sortField = '';
  }
  filter(dt: Table, $event: Event) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
}
