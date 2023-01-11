import {Component} from "@angular/core";
import {Assignment} from "../../../../../models/assignment";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {AuthService} from "../../../../../services/auth/auth.service";
import {Table} from "primeng/table";

@Component({
  selector: "app-manage",
  templateUrl: "manage.component.html"
})

export class ManageComponent {
  assignments!: Assignment[];
  finishToDelete: boolean = false;
  finishToEdit: boolean = false;
  constructor(public assignmentService: AssignmentService, public authService: AuthService) {
    this.assignmentService.initConfigAssignmentToEdit();
    this.assignmentService.initConfigAssignmentToDelete();
  }

  onGlobalFilter(dt: Table, assignmentName: Event) {
    // dt.(assignmentName, 'contains');
  }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  deleteAssignment(assignment: Assignment) {
    this.assignmentService.setConfigAssignmentToDelete({modalOpened: true, assignment: assignment}).subscribe(next =>{
      if(this.finishToDelete){
        // this.ngOnInit();
      }
    })
  }


  editAssignment(assignment: Assignment) {
    this.assignmentService.setConfigAssignmentToEdit({modalOpened: true, assignment: assignment}).subscribe(next => {
      if(this.finishToEdit){
        // this.ngOnInit();
      }
    })
  }
}
