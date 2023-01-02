import {Component, OnInit} from "@angular/core";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {Table} from "primeng/table";
import {Assignment} from "../../../../../models/assignment";

@Component({
  selector: "app-update",
  templateUrl: "update.component.html"
})

export class UpdateComponent implements OnInit{
  assignments!: Assignment[];
  assignmentName: any;
  assignmentToEdit!: Assignment;
  submitted: boolean = false;
  modalDisplayed: boolean = false;
  constructor(public assignmentService: AssignmentService) {
  }

  onGlobalFilter(dt: Table, assignmentName: Event) {
    // dt.(assignmentName, 'contains');
  }

  editAssignment(assignment: Assignment) {
    console.log(assignment)
    this.assignmentToEdit = assignment;
    this.modalDisplayed = true;
  }

  deleteProduct(assignment: any) {

  }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  saveEdit() {
    console.log(this.assignmentToEdit)
    this.modalDisplayed = false;

  }
  cancelEdit(){
    this.modalDisplayed = false;
  }
}
