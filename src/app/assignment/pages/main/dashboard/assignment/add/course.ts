import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormService} from "../../../../../services/form.service";
import {UtilService} from "../../../../../services/util.service";

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
              <p-dropdown inputId="name" [(ngModel)]="formService.assignmentToAdd.course.name" [options]="courses" (onChange)="setCourse($event)" optionLabel="name" placeholder="Selectionner un cours"></p-dropdown>
            </div>
          </div>
        </ng-template>
        <ng-template pTemplate="footer">
          <div class="grid grid-nogutter justify-content-between">
            <p-button label="Precedant" (onClick)="previousPage()" icon="pi pi-angle-left" iconPos="left"></p-button>
            <p-button label="Suivant" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right" [disabled]="!formService.isSelectedCourse()"></p-button>
          </div>
        </ng-template>
      </p-card>
    </div>
  `
})

export class Course implements OnInit{
  name: any;
  courses!: any[];
  constructor(private route: Router, public formService: FormService, private utilService: UtilService) {
  }

  nextPage() {
    this.route.navigate(['add/student'])
  }
  previousPage() {
    this.route.navigate(['add/assignment'])
  }

  setCourse($event: any) {
    console.log($event.value)
    this.formService.assignmentToAdd.course.name = $event.value.name;
    this.formService.assignmentToAdd.course.teacherPhoto = 'assets/layout/images/assignment/prof/'+$event.value.teacherPhoto;
    this.formService.assignmentToAdd.course.coursePhoto = 'assets/layout/images/assignment/cours/'+$event.value.coursePhoto;
  }

  ngOnInit(): void {
    this.utilService.getLocalCourses().subscribe(courses =>{
      this.courses = courses
    });
  }

}
