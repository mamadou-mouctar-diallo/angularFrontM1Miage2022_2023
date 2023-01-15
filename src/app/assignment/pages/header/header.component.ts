import {Component, ElementRef, OnInit, Renderer2, ViewChild} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Sidebar} from "primeng/sidebar";
import {ConfigService} from "../../services/config.service";
import {User} from "../../models/user";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
  @ViewChild('menubutton') menubutton!: ElementRef;
  @ViewChild('sidebar') sidebar!: Sidebar;
  showDivider: boolean = false;
  constructor(public loginService: AuthService, private route: Router, public configService: ConfigService, public authService: AuthService, public userService:UserService) {
  }

  opened: boolean = false;
  actualUser:any;
  displayUserInformationModal:boolean=false;
  displayEditUserInformationModal:boolean=false;
  actualUserToEdit!: any;
  allUsers!: User[];
  editUser!:any;

  logIn() {
    if (!this.loginService.isUserLogged()) this.route.navigate(['connect'])
  }
  logOut(){
    // this.loginService.sessionDistory();
    if (this.loginService.isUserLogged()){
      this.route.navigate(['connect'])
      localStorage.clear();
    }
  }


  toggleMenu() {
    this.configService.onMenuToggle();
  }

  ngOnInit(): void {
  }

  profile() {
    this.actualUser=this.authService.getActualUser();
    console.log(this.actualUser._id);
    if(this.actualUser!==null || this.actualUser!==undefined){
      this.displayUserInformationModal=true;
    }
  }
  editUserProfile(){
    //this.displayUserInformationModal=false;
    this.displayEditUserInformationModal=true;
    //this.editUser=this.actualUser;
    this.actualUserToEdit = {
      id:this.actualUser?.id,
      name:this.actualUser?.name,
      email:this.actualUser?.email,
      password:this.actualUser?.password,
      role:this.actualUser?.role
    };
    this.actualUserToEdit= this.actualUser;
  }
  confirmEditUser(){
    //console.log(this.actualUserToEdit);
    //this.actualUserToEdit._id=this.actualUser._id;
    // this.userService.getAll().subscribe(users => {
    //   for (const user of users){
    //     if(user.email===this.actualUserToEdit.email){
    //       this.editUser=user;
    //       this.actualUserToEdit._id=this.editUser._id;
    //     }
    //   }
    //   this.allUsers = users;
    // });
    console.log(this.actualUserToEdit);
    this.userService.updateUser(this.actualUserToEdit).subscribe(user=>{
      console.log(user)
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
