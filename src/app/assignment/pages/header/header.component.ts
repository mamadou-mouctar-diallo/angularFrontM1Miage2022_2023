import {Component, ElementRef, OnInit, Renderer2, ViewChild} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Sidebar} from "primeng/sidebar";
import {ConfigService} from "../../services/config.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
  @ViewChild('menubutton') menubutton!: ElementRef;
  @ViewChild('sidebar') sidebar!: Sidebar;
  constructor(public loginService: AuthService, private route: Router, public configService: ConfigService, public authService: AuthService, public userService:UserService) {
  }

  actualUser:any;
  displayUserInformationModal:boolean=false;
  displayEditUserInformationModal:boolean=false;
  actualUserToEdit!: any;
  ancienPassword!:string |undefined;

  logIn() {
    if (!this.loginService.isUserLogged()) this.route.navigate(['connect'])
  }
  logOut(){
    if (this.loginService.isUserLogged()){
      this.route.navigate(['connect'])
      localStorage.clear();
    }
  }


  toggleMenu() {
    this.configService.onMenuToggle();
  }

  ngOnInit(): void {
    this.ancienPassword=undefined;
    this.actualUser=this.authService.getActualUser();
    this.userService.getAll().subscribe(users => {
      for (const user of users){
        if(user.id == this.actualUser.id){
          this.actualUser.name=user.name;
          this.actualUser.email=user.email;
          this.actualUser.password=user.password
        }
      }
    })
  }

  profile() {
    this.ngOnInit();
    console.log("altual user name: "+this.actualUser.name);
    if(this.actualUser!==null || this.actualUser!==undefined){
      this.displayUserInformationModal=true;
    }
  }
  editUserProfile(){
    this.displayEditUserInformationModal=true;
    this.actualUserToEdit = {
      id:this.actualUser?.id,
      name:this.actualUser?.name,
      email:this.actualUser?.email,
      password:this.actualUser?.password,
      role:this.actualUser?.role
    };
  }
  confirmEditUser(){
    this.userService.getAll().subscribe(users => {
      for (const user of users){
        if(user.id===this.actualUserToEdit.id){
          user.email=this.actualUserToEdit.email;
          user.name=this.actualUserToEdit.name;

          if(this.ancienPassword !== undefined && this.ancienPassword !== null){
            user.password=this.ancienPassword;
          }

          this.userService.updateUser(user).subscribe(user=>{
            this.profile();
          });
        }
      }
    });
    this.displayUserInformationModal=true;
    this.displayEditUserInformationModal=false;
  }
  cancelEditUserModal(){
    this.displayUserInformationModal=true;
    this.displayEditUserInformationModal=false;
  }

  goHome() {
    this.route.navigate(['']).then(e => console.log(e));
  }
}
