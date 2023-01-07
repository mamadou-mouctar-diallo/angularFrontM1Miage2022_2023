import {Component, OnInit} from "@angular/core";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {Table} from "primeng/table";
import {Assignment} from "../../../../../models/assignment";
import {AuthService} from "../../../../../services/auth/auth.service";

@Component({
  selector: "app-update",
  templateUrl: "update.component.html"
})

export class UpdateComponent implements OnInit{
  assignments!: Assignment[];
  assignmentName: any;
  assignmentToEdit!: any;
  submitted: boolean = false;
  modalDisplayed: boolean = false;
  displayModalAuthorization: boolean = false;
  displayModalModification: boolean = false;
  message!: string;
  constructor(public assignmentService: AssignmentService, private authService: AuthService) {
  }

  onGlobalFilter(dt: Table, assignmentName: Event) {
    // dt.(assignmentName, 'contains');
  }

  editAssignment(assignment: Assignment) {
    console.log(assignment)
    this.assignmentToEdit = assignment;
    this.modalDisplayed = true;
  }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  saveEdit() {
    this.assignmentService.upDateAssignment(this.assignmentToEdit).subscribe(data => {
      console.log(data)
      if(!this.authService.isUserLogged()){
        this.displayModalAuthorization = true;
        this.message = data.auth;
      }else {
        this.displayModalModification = true;
        this.message = data.msg;
      }
    })
    this.modalDisplayed = false;

  }
  cancelEdit(){
    this.modalDisplayed = false;
  }
  closeModalAuthorization(): void{
    this.displayModalAuthorization = false;
  }
  closeModalModification(): void{
    this.displayModalModification = false;
  }

}
