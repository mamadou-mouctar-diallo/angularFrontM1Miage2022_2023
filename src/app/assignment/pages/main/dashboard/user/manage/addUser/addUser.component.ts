import {Component} from "@angular/core";
import {User} from "../../../../../../models/user";
import {UserService} from "../../../../../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addAssignment',
  templateUrl: './addUser.component.html'
})
export class AddUserComponent {
  stateOptions: any[];
  value1: string = "Classic";
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  constructor(public userService: UserService, private route: Router) {
    this.stateOptions = [{label: 'Classic', value: 'Classic'}, {label: 'Admin', value: 'Admin'}];
  }
  addNewUser():void{
    let user:User ={
      id: this.userService.generateId(),
      name: this.name,
      email:this.email,
      password:this.password,
      role:this.role
    };
    this.userService.add(user).subscribe(user=>console.log(user));
    this.route.navigate(['/users']);
}
}
