import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {AssignmentService} from "../../services/assignment/assignment.service";
import {Assignment} from "../../models/assignment";
import {Router} from "@angular/router";
import {Toast} from "primeng/toast";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, AfterViewInit{
  password!: string;
  remembered: boolean = true;
  email?: String;
  message!: string;
  private assignments?: Assignment[];
  @ViewChild('toast')toast!: any;
  displayModalLogin: boolean = false;
  displayModalPassword: boolean = false;
  constructor(private authService: AuthService, private assignmentService: AssignmentService, private route: Router) {
  }

  ngAfterViewInit(): void {
        this.toast = Toast;
    }

  onSubmit() {
    this.authService.makeSession({email: this.email, password: this.password}).subscribe(data => {
      console.log(data)
     if(data.msg.startsWith('bearer')){
       localStorage.setItem('token', data.msg);
       this.route.navigate(['']).then(err => console.log(err))
     }else {
       this.message = data.msg;
       this.displayModalLogin = true;
     }
    });
  }

  onForgetPassword() {
    this.displayModalPassword = true;
  }

  change() {
    this.remembered = !this.remembered
    console.log(this.remembered)
  }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments)
    this.change();
  }

  onConfirm() {
    this.toast.messageService.clear('c')
  }

  onReject() {
    this.toast.messageService.clear('c')
  }

  closeModalLogin() {
    this.displayModalLogin = false;
  }

  closeModalPassword() {
    this.displayModalPassword = false;
  }
}
