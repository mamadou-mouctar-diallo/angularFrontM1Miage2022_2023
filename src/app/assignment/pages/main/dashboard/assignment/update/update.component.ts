import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {Table} from "primeng/table";
import {Assignment} from "../../../../../models/assignment";
import {AuthService} from "../../../../../services/auth/auth.service";

@Component({
  selector: "app-update",
  templateUrl: "update.component.html"
})

export class UpdateComponent implements OnInit{
  assignmentToEdit!: any;
  submitted: boolean = false;
  modalDisplayed: boolean = false;
  displayModalModification: boolean = false;
  message!: string;
  @Output()
  finishToEdit: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public assignmentService: AssignmentService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.assignmentToEdit = this.assignmentService.configAssignmentToEdit.assignment;
    this.modalDisplayed = this.assignmentService.configAssignmentToEdit.modalOpened;
  }

  saveEdit() {
    this.assignmentService.upDateAssignment(this.assignmentToEdit).subscribe(data => {
      console.log(data)
      if(!this.authService.isUserLogged()){
        this.authService.showAuthorization();
        this.message = data.auth;
      }else {
        this.displayModalModification = true;
        this.message = data.msg;
      }
      this.modalDisplayed = false;
    })

  }
  cancelEdit(){
    this.modalDisplayed = false;
    this.assignmentService.initConfigAssignmentToEdit();
  }
  closeModalModification(): void{
    this.displayModalModification = false;
    this.finishToEdit.emit(true);
    this.assignmentService.initConfigAssignmentToEdit();
  }

}
