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
  constructor(private assignmentService: AssignmentService) {
  }

  deleteProduct(assignment: any) {

  }

  onGlobalFilter(dt: Table, $event: Event) {
    dt.filterGlobal($event.target, 'contains')
  }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }
}
