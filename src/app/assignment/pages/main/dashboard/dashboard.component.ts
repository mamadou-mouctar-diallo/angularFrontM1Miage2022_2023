import {Component, ElementRef, OnInit} from "@angular/core";
import {MessagesService} from "../../../services/messages.service";
import {Assignment} from "../../../models/assignment";
import {MenuItem} from "../../../interfaces/interfaces";
import {AssignmentService} from "../../../services/assignment/assignment.service";
import {AuthService} from "../../../services/auth/auth.service";

export interface SelectedItem{ label: string, value: string }
export interface StateAssignment {
  onTime: string,
  rendered: string,
  pastTime: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})


export class DashboardComponent implements OnInit{
  title = 'frontend';
  items!: MenuItem[];
  sortKey: any;
  assignments!: Assignment[];
  stateAssignement!: { onTime: string; rendered: string; pastTime: string };
  isUserLogged: boolean = false;
  constructor(private messagesService: MessagesService, public authService: AuthService, private assignmentService: AssignmentService) {
  }
  ngOnInit(): void {
    this.sortOptions = [
      {label: 'Devoir rendu', value: '!rendered'},
      {label: 'Devoir non rendu', value: 'rendered'}
    ];
    this.assignmentService.getAssignments().subscribe(assignments =>{
      this.assignments = assignments;
    });
    this.stateAssignement = {
      onTime: "Devoir en cours",
      rendered: "Devoir rendu",
      pastTime: "Délais du devoir passé"
    }
    this.isUserLogged = this.authService.isUserLogged();
  }
  cours: string [] = ['algebre.png', 'anglais.png', 'gestion_financiere.png','intelligence_artificielle.png','management_si.png','math_analyse.png', 'math_big_data.png',
  'web.png'
  ]
  profs: string[] = ['prof1.png', 'prof2.png', 'prof3.png', 'prof4.png', 'prof5.png', 'prof6.png', 'prof7.png']

  assignmentLocal!: Assignment[];

  selectedAssignment!: Assignment;

  sortOptions!: SelectedItem[] ;

  sortOrder!: number;

  sortField!: string;
  displayModal: boolean = false;
  assignmentName!: string;

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  isOutOfDeadLine(deadLine: Date): boolean{
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let date = year+'-'+month.toString().padStart(2, '0')+'-'+day.toString().padStart(2, '0');
    let currentDate = new Date(date);
    let deaLine = new Date(deadLine);
    return currentDate > deaLine;
  }

  getIntex(size: number): number{
    return Math.floor((Math.random() * size));
  }

  getAssignmentState(deadLine: Date): string{
   if(this.isOutOfDeadLine(deadLine)) return this.stateAssignement.pastTime;
   return this.stateAssignement.onTime;
  }
  getIcon(deadLine: Date): string{
    if(this.isOutOfDeadLine(deadLine)) return 'pi-times-circle red';
    return 'pi-clock orange'
  }

  showModalDialog(assigment: Assignment): void {
    this.selectedAssignment = assigment;
    this.displayModal = true;
  }
  closeModalDialog(): void{
    this.displayModal = false;
  }

  sortByName() {
    this.assignments.filter(assignments => assignments.name == this.assignmentName);
    console.log(this.assignments);
  }

  totalRenderedAssignment(): number {
   return this.assignments.filter(assignment => assignment.rendered).length;
  }

  totalAssignmentInDealine(): number{
    return this.assignments.filter(assignment => !assignment.rendered && !this.isOutOfDeadLine(assignment.deadLine)).length;
  }

  totalAssignmentOutDealine(): number {

    return this.assignments.filter(assignment => !assignment.rendered && this.isOutOfDeadLine(assignment.deadLine)).length;
  }
  totalAssignments(): number{
    return this.assignments.length;
  }

  rendre(): void {
    this.selectedAssignment.rendered = true;
    this.assignmentService.upDateAssignment(this.selectedAssignment).subscribe(data =>{
      console.log(data)
    })
  }
  isMarked(): boolean{
    return this.selectedAssignment.mark !== null;
  }

}

