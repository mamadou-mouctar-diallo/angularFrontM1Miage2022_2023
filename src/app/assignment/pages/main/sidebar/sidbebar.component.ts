import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2} from "@angular/core";
import {Sidebar} from "primeng/sidebar";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: "app-sidebar",
  templateUrl: "sidebar.component.html"
})

export class SidbebarComponent extends Sidebar implements OnInit{

  @Input()
  button!: any;
  model: any[] = [];
  constructor(override el: ElementRef, override renderer: Renderer2, override cd: ChangeDetectorRef, override config: PrimeNGConfig) {
    super(el, renderer,cd ,config);
  }
  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/']
          }
        ]
      },
      {
        label: 'devoirs',
        items: [
          {label: 'Ajouter', icon: 'pi pi-plus', routerLink: ['/add']},
          {label: 'Supprimer', icon: 'pi pi-trash', routerLink: ['/delete']},
          {label: 'Modifier', icon: 'pi pi-pencil', routerLink: ['/update']}
        ]
      },
      {
        label: 'utilisateurs',
        items: [
          {label: 'Manage users', icon: 'pi pi-folder-open', routerLink: ['/users']},
        ]
      }
    ]
  }

}

