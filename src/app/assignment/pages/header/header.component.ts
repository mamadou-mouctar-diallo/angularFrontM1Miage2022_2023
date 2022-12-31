import {Component, ElementRef, Renderer2, ViewChild} from "@angular/core";
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";
import {HeaderService} from "../../services/header/header.service";
import {Sidebar} from "primeng/sidebar";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @ViewChild('menubutton') menubutton!: ElementRef;
  @ViewChild('sidebar') sidebar!: Sidebar;
  showDivider: boolean = false;
  constructor(public loginService: LoginService, private route: Router, public headerService : HeaderService, private renderer: Renderer2) {
    //
    // this.renderer.listen('window', 'click', (e : Event) => {
    //   if(e.target !== this.menubutton.nativeElement && this.sidebar !== undefined && e.target != this.sidebar.container){
    //     this.opened = false;
    //     console.log(this.opened);
    //   }
    // })
    // if(window.document.documentElement.clientWidth <= 576){
    //   this.showDivider = true;
    // }else{
    //   this.showDivider = false;
    // }
  }

  opened: boolean = false;

  logIn() {
    if (!this.loginService.isUserLogged()) this.route.navigate(['connect'])
  }
  logOut(){
    this.loginService.sessionDistory();
  }

  toggleMenu() {
    this.opened = !this.opened;
    console.log(this.opened)
  }
}
