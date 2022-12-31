import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../../../../services/user/user.service";

@Component({
  selector: "app-add",
  templateUrl: "addUser.component.html"
})

export class AddUserComponent {
  constructor(private route: Router, private userService: UserService) {
  }

  addUser(): void{
    this.userService.add({}).subscribe(data => {
      console.log(data);
      if(typeof data === "string"){
        if (data && data.startsWith("Bearer")) {
          localStorage.setItem("token", data.split(' ')[1]);
          this.route.navigate(['']).then(r => console.log(r));
        }
      }
    })
  }

}
