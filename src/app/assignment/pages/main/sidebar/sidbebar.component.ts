import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2} from "@angular/core";
import {Sidebar} from "primeng/sidebar";
import {PrimeNGConfig} from "primeng/api";
import {ConfigService} from "../../../services/config.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "sidebar.component.html"
})

export class SidbebarComponent implements OnInit{

  @Input()
  button!: any;
  model: any[] = [];
  constructor(public configService: ConfigService) {
  }
  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        item: {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/']
          }
      },
      {
        label: 'Devoirs',
        item: {
            label: 'Manage assignments',
            icon: 'pi pi-folder-open',
            routerLink: ['/assignments']
          }
      },
      {
        label: 'utilisateurs',
        item: {
          label: 'Manage users',
          icon: 'pi pi-folder-open',
          routerLink: ['/users']
        }
      }
    ]
  }

}

