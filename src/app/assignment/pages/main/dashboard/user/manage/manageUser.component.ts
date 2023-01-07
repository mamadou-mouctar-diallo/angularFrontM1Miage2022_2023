import {Component,OnInit} from "@angular/core";
import {UserService} from "../../../../../services/user/user.service"
import {Table} from "primeng/table";
import {User} from "../../../../../models/user";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {Assignment} from "../../../../../models/assignment";
@Component({
  selector: "app-manage",
  templateUrl: "manageUser.component.html"
})

export class ManageUserComponent implements OnInit{
  users!: User[];
  userToEdit!: User;
  constructor(public userService: UserService) {
  }

  onGlobalFilter(dt: Table, assignmentName: Event) {
    // dt.(assignmentName, 'contains');
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => {
      this.users = users;
      console.log(this.users)
    });
  }

  addUser() {

  }
  deleteUser(user:User){

  }
  updateUser(user:User){
    this.userToEdit = user;
    console.log(this.userToEdit);
}
  editUser(){

  }
  allUsers(){

  }
}
