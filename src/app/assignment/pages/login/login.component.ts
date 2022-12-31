import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {LoginService} from "../../services/login/login.service";
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
  constructor(private loginService: LoginService, private assignmentService: AssignmentService, private route: Router) {
  }

  ngAfterViewInit(): void {
        this.toast = Toast;
    }

  onSubmit() {
    console.log(this.email)
    this.loginService.makeSession({email: this.email, password: this.password}).subscribe(token => {
      console.log(token)
      localStorage.setItem('token', token);
      // if(this.loginService.isUserAuthorized()){
        this.route.navigate(['']).then(err => console.log(err))
      // }
    });
  }

  onForgetPasswordClick() {

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
}
