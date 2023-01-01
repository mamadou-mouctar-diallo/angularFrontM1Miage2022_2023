export interface Message {
    severity: string,
    summary: string,
    detail: string
}

export interface MessageMethode{
  add(message: Message): void,
  addAll(messages: Message[]): void,
  clear(key?: string): void
}
export interface MenuItem {
    label?: string,
    icon?: string,
    command?: (event?: any) => void,
    url?: string,
    separator?: boolean,
    routeLink?: any
}

export interface AppConfig {
  inputStyle: string;
  colorScheme: string;
  theme: string;
  ripple: boolean;
  menuMode: string;
  scale: number;
}

export interface LayoutState{
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}
