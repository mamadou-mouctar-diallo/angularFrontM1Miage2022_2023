import {Component, OnInit} from "@angular/core";
import {Table} from "primeng/table";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {Assignment} from "../../../../../models/assignment";

@Component({
  selector: "app-delete",
  templateUrl: "delete.component.html"
})

export class DeleteComponent implements OnInit{
  assignments!: Assignment[];
  assignmentToDelete!: any;
  modalDisplayed: boolean = false;
  constructor(private assignmentService: AssignmentService) {
  }

  deleteAssignment(assignment: any) {
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
    this.assignmentService.deleteAssignment(this.assignmentToDelete._id).subscribe(msg => console.log(msg))
    this.modalDisplayed = false;

  }
  cancelDelete(){
    this.modalDisplayed = false;

  }
}
