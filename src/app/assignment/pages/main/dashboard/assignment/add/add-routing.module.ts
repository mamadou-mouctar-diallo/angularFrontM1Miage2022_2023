import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AddComponent} from "./add.component";
import {Assignment} from "./assignment";
import {Student} from "./student";
import {Course} from "./course";

@NgModule({
imports: [
RouterModule.forChild([
  {
    path: 'add',
    component: AddComponent,
    children: [
      {path: '', redirectTo: 'assignment', pathMatch: 'full'},
      {path: 'assignment', component: Assignment},
      {path: 'student', component: Student},
      {path: 'course', component: Course}
    ]
  }
])
],
  exports: [RouterModule]
})

export class AddRoutingModule {}
