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
  constructor(public assignmentService: AssignmentService) {
  }

  onGlobalFilter(dt: Table, assignmentName: Event) {
    // dt.(assignmentName, 'contains');
  }

  editProduct(assignment: any) {

  }

  deleteProduct(assignment: any) {

  }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }
}
