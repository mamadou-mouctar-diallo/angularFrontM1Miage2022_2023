import {Component, Injectable, OnInit} from "@angular/core";
import {Assignment} from "../../../../../models/assignment";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AssignmentService} from "../../../../../services/assignment/assignment.service";
import {FormService} from "../../../../../services/form.service";



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
@Injectable()
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
constructor(private formService: FormService, private route: Router, private assignmentService: AssignmentService) {
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

  addAssignment() {
  console.log(this.formService.assignmentToAdd)
  this.assignmentService.addAssignment(this.formService.assignmentToAdd).subscribe(data => {
    if(data.msg){
      this.formService.messageAdd = data.msg;
      this.formService.isAddedAssignment = true;
    }
    this.navigateToManage();
  })
  }

  navigateToManage() {
    this.route.navigate(['assignments'])
  }
}
