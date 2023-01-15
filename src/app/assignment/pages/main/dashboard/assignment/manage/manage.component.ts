import {Component} from "@angular/core";
import {Assignment} from "../../../../../models/assignment";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {AuthService} from "../../../../../services/auth/auth.service";
import {Table} from "primeng/table";
import {Router} from "@angular/router";
import {FormService} from "../../../../../services/form.service";

@Component({
  selector: "app-manage",
  templateUrl: "manage.component.html"
})

export class ManageComponent {
  assignments!: Assignment[];
  finishToDelete: boolean = false;
  finishToEdit: boolean = false;
  assignmentName: any;
  constructor(public assignmentService: AssignmentService, public authService: AuthService, private route: Router,public formService: FormService) {
    this.assignmentService.initConfigAssignmentToEdit();
    this.assignmentService.initConfigAssignmentToDelete();
    this.assignmentService.initConfigAssignmentToAdd();
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
        this.ngOnInit();
      }
    })
  }


  editAssignment(assignment: Assignment) {
    this.assignmentService.setConfigAssignmentToEdit({modalOpened: true, assignment: assignment}).subscribe(next => {
      if(this.finishToEdit){
        this.ngOnInit();
      }
    })
  }

  showAddAssignment() {
    // this.assignmentService.setConfigAssignmentToAdd({modalOpened: true, assignment: {}})
    console.log("clicked add")
    this.route.navigate(['add'])
  }

  totalAssignments(): number {
    return this.assignments !== undefined ? this.assignments.length : 0;
  }

  closeModalAdd() {
    this.formService.isAddedAssignment = false;
  }
}
