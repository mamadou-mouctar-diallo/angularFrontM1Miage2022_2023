import {Component, OnInit} from "@angular/core";
import {Assignment} from "../../../../../models/assignment";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";



export interface formAssignment {
  styleClasse: String,
  visible: boolean,
  assignment?: Assignment

}

@Component({
  selector: 'app-addAssignment',
  templateUrl: './add.component.html',
  providers: [MessageService]
})
export class AddComponent implements OnInit{
  formSize: number = 0;
  email: any;
  password: any;
  formAssignmentA: formAssignment = {
    styleClasse: '',
    visible: true
  };
  formAssignmentB: formAssignment = {
    styleClasse: '',
    visible: false
  };
  formAssignmentC: formAssignment = {
    styleClasse: '',
    visible: false
  };

  forms: formAssignment[] = [this.formAssignmentA, this.formAssignmentB, this.formAssignmentC]
  authors: any;
  selectedAutor: any;
  items: any;
  visible: boolean = true;
  displayModalAdd: boolean = true;
constructor(private messageService: MessageService, private route: Router) {
}
  ngOnInit(): void {
    this.items = [{
      label: 'Devoir',
      routerLink: 'assignment'
    },
      {
        label: 'Enseignement',
        routerLink: 'course'
      },
      {
        label: 'Eleve',
        routerLink: 'student'
      },
    ];
  }



  nextForm(): void{
    if(this.formSize <= 3){
      if(this.formSize === 0){
        this.forms[0].styleClasse = "display: none;";
        this.formSize = this.formSize + 1;
      }
    };
  }
  previousForm(): void{
    if(this.formSize > 0)this.formSize = this.formSize - 1;
    if(this.formSize === 0)this.forms[0].styleClasse = "display: grid;";
  }
  getForms(): string[]{
    let i = 2
    let forms: string = '1';
    while ( i <= this.formSize){
      forms += forms+'.'+i;
      i++;
    }
    return forms.split('.');
  }

  addAssignment() {

  }

  navigateToManage() {
    this.route.navigate(['assignments'])
  }
}
