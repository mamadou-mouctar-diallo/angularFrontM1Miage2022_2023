import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormService} from "../../../../../services/form.service";

@Component({
  template: `
    <div class="stepsdemo-content">
      <p-card>
        <ng-template pTemplate="title"> Information de l'enseignement </ng-template>
        <ng-template pTemplate="subtitle"> Selectonner un cours dans le menu delourant </ng-template>
        <ng-template pTemplate="content">
          <div class="p-fluid">
            <div class="field col-12 md:col-6">
              <label for="wagon">Nom du cours</label>
              <p-dropdown inputId="name" [(ngModel)]="formService.assignmentToAdd.course.name" [options]="courses" (onChange)="setCourse($event)" optionLabel="wagon" placeholder="Selectionner un cours"></p-dropdown>
            </div>
          </div>
        </ng-template>
        <ng-template pTemplate="footer">
          <div class="grid grid-nogutter justify-content-between">
            <p-button label="Precedant" (onClick)="previousPage()" icon="pi pi-angle-left" iconPos="left"></p-button>
            <p-button label="Suivant" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right"></p-button>
          </div>
        </ng-template>
      </p-card>
    </div>
  `
})

export class Course {
  name: any;
  courses: any;
  constructor(private route: Router, public formService: FormService) {
  }

  nextPage() {
    this.route.navigate(['add/student'])
  }
  previousPage() {
    this.route.navigate(['add/assignment'])
  }

  setCourse($event: any) {
    console.log($event.value)
  }
}
