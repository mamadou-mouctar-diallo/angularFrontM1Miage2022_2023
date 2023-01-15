import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormService} from "../../../../../services/form.service";

@Component({
  template: `
    <div class="stepsdemo-content">
      <p-card>
        <ng-template pTemplate="title"> Information sur devoir </ng-template>
        <ng-template pTemplate="subtitle"> Entrer les informations du devoir</ng-template>
        <ng-template pTemplate="content">
          <div class="p-fluid">
            <div class="field col-12">
              <label for="name">Nom du devoir</label>
              <input
                #firstname="ngModel"
                id="name"
                type="text"
                required
                pInputText
                [(ngModel)]="formService.assignmentToAdd.name"
                [ngClass]="{ 'ng-dirty': (firstname.invalid && submitted) || (firstname.dirty && firstname.invalid) }"
              />
              <small *ngIf="(firstname.invalid && submitted) || (firstname.dirty && firstname.invalid)" class="p-error">Firstname is required.</small>
            </div>

              <div class="field col-12">
                <label for="icon">Date de rendu</label>
                <p-calendar [(ngModel)]="formService.assignmentToAdd.deadLine" [showIcon]="true" inputId="icon"></p-calendar>
              </div>

            <div class="field col-12">
              <label for="comment">Commentaire</label>
              <textarea [(ngModel)]="formService.assignmentToAdd.comment" pInputTextarea></textarea>
            </div>
          </div>
        </ng-template>
        <ng-template pTemplate="footer">
          <div class="grid grid-nogutter justify-content-end">
            <p-button class="p-button-plain" label="Suivant" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right" [disabled]="!this.formService.isValidfieldAssignment()"></p-button>
          </div>
        </ng-template>
    </p-card>
    </div>
  `
})

export class Assignment implements OnInit{
  submitted: any | boolean;
  deadLine: any;
  name: any;
  comment: any;
  dateRendu: any;
  constructor(private route: Router, public formService: FormService) {
  }

  nextPage() {
    console.log(this.formService.assignmentToAdd)
    console.log(this.formService.isValidfieldAssignment())
  this.route.navigate(['add/course'])
  }

  ngOnInit(): void {
  }
  isValidField(): boolean{
    return this.name.empty() && this.deadLine.empty()
  }

}
