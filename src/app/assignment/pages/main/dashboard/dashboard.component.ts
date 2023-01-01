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
  isThereASession: boolean = false;
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
  }

  selectedAssignment!: Assignment;

  save(assignment: Assignment): void {
    this.assignmentService.addAssignment(assignment).subscribe(msg => console.log(msg));
    this.assignmentService.getOneAssignment(assignment.id).subscribe(assignment => console.log(assignment))
  }

  update() {
    this.messagesService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messagesService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
  }

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

  getAssignmentState(deadLine: Date): string{
   if(this.isOutOfDeadLine(deadLine)) return this.stateAssignement.pastTime;
   return this.stateAssignement.onTime;
  }
  getIcon(deadLine: Date): string{
    if(this.isOutOfDeadLine(deadLine)) return 'pi-times-circle red';
    return 'pi-clock orange'
  }

  showModalDialog(assigment: Assignment) {
    this.selectedAssignment = assigment;
    this.displayModal = !this.displayModal;
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
}

