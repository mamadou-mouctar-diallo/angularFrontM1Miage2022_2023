import {Component, OnInit} from "@angular/core";
import {a, an} from "chart.js/dist/chunks/helpers.core";
import {Router} from "@angular/router";
import {FormService} from "../../../../../services/form.service";
import {UtilService} from "../../../../../services/util.service";
import {AddComponent} from "./add.component";

export interface Student {
  name: String,
  level: String
}

@Component({
  template: `
    <div class="stepsdemo-content">
      <p-card>
        <ng-template pTemplate="title"> Information de l'eleve </ng-template>
        <ng-template pTemplate="subtitle"> Selectionner un eleve dans le menu deroulant </ng-template>
        <ng-template pTemplate="content">
          <div class="p-fluid">
            <div class="field col-12 md:col-6">
              <label for="student">Eleve</label>
              <p-dropdown inputId="student" [(ngModel)]="formService.assignmentToAdd.author" [options]="students" (onChange)="setStudent($event)" optionLabel="name" placeholder="Selectionner un eleve"></p-dropdown>
            </div>
          </div>
        </ng-template>
        <ng-template pTemplate="footer">
          <div class="grid grid-nogutter justify-content-between">
            <button pButton label="Precedant" (click)="previousPage()" icon="pi pi-angle-left" iconPos="left"></button>
            <button pButton class="p-button-success" label="Valider" (click)="nextPage()" icon="pi pi-angle-right" [disabled]="!formService.isValidfieldStudent()"></button>
          </div>
        </ng-template>
      </p-card>
    </div>
  `
})

export class Student implements OnInit{
  submitted: any | boolean;
  students!: Student[];
  constructor(private route: Router, public formService: FormService,private utilService: UtilService,private addComponent: AddComponent) {
  }

  ngOnInit(): void {
        this.utilService.getLocalStudents().subscribe(students => {
          this.students = students
          console.log(this.students)
        });
    }

  nextPage() {
    this.addComponent.addAssignment();
  }
  previousPage() {
  this.route.navigate(['add/course'])
  }
  setStudent(event: any){
    this.formService.assignmentToAdd.author = event.value.name;
  }
}
