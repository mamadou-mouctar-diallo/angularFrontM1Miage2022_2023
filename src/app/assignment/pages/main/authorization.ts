import {Component} from "@angular/core";
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-auth',
  template:`
    <p-dialog [(visible)]="configService.modalAutorization" header="Atention" [modal]="true" [style]="{width:'450px'}" [closable]="false">
      <div class="flex align-items-center justify-content-center">
        <i class="pi pi-exclamation-triangle mr-3 red" style="font-size: 2rem"></i>
        <span  class="red">Vous n'êtes pas autoriés à naviguer ici</span>
      </div>
      <ng-template pTemplate="footer">
        <button pButton pRipple icon="pi pi-check" class="p-button-text" label="D'accord" (click)="closeModalAutorization()"></button>
      </ng-template>
    </p-dialog>
  `
})

export class Authorization {
  constructor(public configService: ConfigService) {
  }


  closeModalAutorization() {
    this.configService.modalAutorization = false;
  }
}
