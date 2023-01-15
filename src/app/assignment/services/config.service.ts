import {HostListener, Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {AppConfig, LayoutState} from "../interfaces/interfaces";



@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  isOpenedMenu: boolean = false;

  state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
  }

  config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'light',
    theme: 'lara-light-indigo',
    scale: 14,
  };
  modalAutorization: boolean = false;

  openOverlay = new Subject<any>();
  configUpdate = new Subject<AppConfig>()

  openOverlay$ = this.openOverlay.asObservable();
  configUpdate$ = this.configUpdate.asObservable();

  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.openOverlay.next(null);
      }
    }


    this.isOpenedMenu = !this.isOpenedMenu;
    console.log(this.isOpenedMenu);

    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    }
    else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

      if (this.state.staticMenuMobileActive) {
        this.openOverlay.next(null);
      }
    }
  }

  showProfileSidebar() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.openOverlay.next(null);
    }
  }

  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }

  isOverlay() {
    return this.config.menuMode === 'overlay';
  }

  isDesktop() {
    return window.innerWidth > 991;
  }
  @HostListener('window:resize',['$event'])
  isMobile() {
    return !this.isDesktop();
  }

  onConfigUpdate() {
    this.configUpdate.next(this.config);
  }


}
