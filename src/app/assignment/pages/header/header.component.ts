import {Component, ElementRef, OnInit, Renderer2, ViewChild} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Sidebar} from "primeng/sidebar";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
  @ViewChild('menubutton') menubutton!: ElementRef;
  @ViewChild('sidebar') sidebar!: Sidebar;
  showDivider: boolean = false;
  constructor(public loginService: AuthService, private route: Router, public configService: ConfigService, public authService: AuthService) {
  }

  opened: boolean = false;

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

  }

  goHome() {
    this.route.navigate(['']).then(e => console.log(e));
  }
}
