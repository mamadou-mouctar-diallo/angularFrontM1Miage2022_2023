import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AddComponent} from "./add.component";
import {Assignment} from "./assignment";
import {Student} from "./student";
import {Course} from "./course";
import {LoginGuard} from "../../../../../guards/login.guard";

@NgModule({
imports: [
RouterModule.forChild([
  {
    path: 'add',
    component: AddComponent,
    canActivate: [LoginGuard],
    children: [
      {path: '', redirectTo: 'assignment', pathMatch: 'full'},
      {path: 'assignment', component: Assignment, canActivate: [LoginGuard]},
      {path: 'student', component: Student, canActivate: [LoginGuard]},
      {path: 'course', component: Course, canActivate: [LoginGuard]}
    ]
  }
])
],
  exports: [RouterModule]
})

export class AddRoutingModule {}
