import {Component,OnInit} from "@angular/core";
import {UserService} from "../../../../../services/user/user.service"
import {Table} from "primeng/table";
import {User} from "../../../../../models/user";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {Assignment} from "../../../../../models/assignment";
import {Router} from "@angular/router";
@Component({
  selector: "app-manage",
  templateUrl: "manageUser.component.html"
})

export class ManageUserComponent implements OnInit{
  users!: User[];
  stateOptions: any[];
  userToEdit!: User;
  userToDelete!: any;
  displayAddUserModal: boolean = false;
  displayDeleteUserModal: boolean = false;
  displayEditUserModal:boolean = false;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  action?:string;
  constructor(public userService: UserService, private route: Router) {
    this.stateOptions = [{label: 'Classic', value: 'Classic'}, {label: 'Admin', value: 'Admin'}];
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

  showAddUserModalDialog(){
    this.action='adding';
    this.displayAddUserModal = true;
  }

  addNewUser(){
    if(this.isDisableAddUserForm()==false){
      let user:User ={
        id: this.userService.generateId(),
        name: this.name,
        email:this.email,
        password:this.password,
        role:this.role
      };
      this.userService.add(user).subscribe(user=>console.log(user));
      this.displayAddUserModal = false;
      this.ngOnInit();
    }
  }
  deleteUser(user:User){
    console.log(user)
    this.userToDelete = user;
    this.displayDeleteUserModal = true;
    //this.userService.delete(user)
  }
  confirmDeleteUser() {
    this.userService.deleteUser(this.userToDelete._id).subscribe(msg => console.log(msg))
    this.displayDeleteUserModal = false;
  }
  closeDeleteModal(){
    this.displayDeleteUserModal = false;
  }
  updateUser(user:User){
    console.log(user);
    this.userToEdit = user;
    this.displayEditUserModal=true;
}
  // name?: string;
  // email?: string;
  // password?: string;
  // role?: string;
  isDisableAddUserForm():boolean{
    if(this.name == null || this.email==null
      || this.password==null || this.role==null
      || this.name.replaceAll(' ','')==''
      || this.email.replaceAll(' ','')==''
      || this.password.replaceAll(' ','')==''
      || this.password?.search(' ')!=-1
    ){
      return true;
    }
    return false;
  }

  totalUsers():number{
    return this.users.length;
  }
  editUser(){

  }
  allUsers(){

  }
}
