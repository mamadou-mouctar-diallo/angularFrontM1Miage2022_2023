import {Injectable} from "@angular/core";
import {AppConfig, LayoutState} from "../../interfaces/interfaces";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService{

  overlayOpen = new Subject();

  config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'light',
    theme: "lara-light-indigo",
    scale: 14
  };
  state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
  };

  showProfileSibar(){
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if(this.state.profileSidebarVisible) this.overlayOpen.next(null);
  }

}
