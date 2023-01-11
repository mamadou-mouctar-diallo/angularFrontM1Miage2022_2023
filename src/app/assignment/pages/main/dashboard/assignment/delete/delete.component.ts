import {Component, OnInit} from "@angular/core";
import {Table} from "primeng/table";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {Assignment} from "../../../../../models/assignment";
import {AuthService} from "../../../../../services/auth/auth.service";

@Component({
  selector: "app-delete",
  templateUrl: "delete.component.html"
})

export class DeleteComponent implements OnInit{
  assignments!: Assignment[];
  assignmentToDelete!: any;
  modalDisplayed: boolean = false;
  displayModalDeletion: boolean = false;
  message!: string;
  constructor(private assignmentService: AssignmentService, public authService: AuthService) {
  }

  deleteAssignment(assignment: Assignment) {
    console.log(assignment)
    this.assignmentToDelete = assignment
    this.modalDisplayed = true;
  }

  onGlobalFilter(dt: Table, $event: Event) {
    dt.filterGlobal($event.target, 'contains')
  }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  confirmDelete() {
    this.assignmentService.deleteAssignment(this.assignmentToDelete._id).subscribe(data => {
      console.log(data)
      if(!this.authService.isUserLogged()){
        this.authService.showAuthorization();
        this.message = data.auth;
      }else {
        this.displayModalDeletion = true;
        this.message = data.msg;
      }

    })
    this.modalDisplayed = false;

  }
  cancelDelete(){
    this.modalDisplayed = false;

  }
  closeModeDeletion(): void {
    this.displayModalDeletion = false;
  }
}
