import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Table} from "primeng/table";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {Assignment} from "../../../../../models/assignment";
import {AuthService} from "../../../../../services/auth/auth.service";

@Component({
  selector: "app-delete",
  templateUrl: "delete.component.html"
})

export class DeleteComponent implements OnInit{
  @Input()
  assignmentToDelete!: any;
  modalDisplayed: boolean = false;
  displayModalDeletion: boolean = false;
  message!: string;
  @Output()
  finishToDelete: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private assignmentService: AssignmentService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.assignmentToDelete = this.assignmentService.configAssignmentToDelete.assignment;
    this.modalDisplayed = this.assignmentService.configAssignmentToDelete.modalOpened;
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
    this.assignmentService.initConfigAssignmentToDelete();

  }
  closeModeDeletion(): void {
    this.displayModalDeletion = false;
    this.finishToDelete.emit(true);
    this.assignmentService.initConfigAssignmentToDelete();
  }
}
