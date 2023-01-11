import {Component} from "@angular/core";
import {Assignment} from "../../../../../models/assignment";



export interface formAssignment {
  styleClasse: String,
  visible: boolean,
  assignment?: Assignment

}

@Component({
  selector: 'app-addAssignment',
  templateUrl: './add.component.html'
})
export class AddComponent {

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

  formSize: number = 0;
  email: any;
  password: any;
  forms: formAssignment[] = [this.formAssignmentA, this.formAssignmentB, this.formAssignmentC]
  authors: any;
  selectedAutor: any;
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
}
