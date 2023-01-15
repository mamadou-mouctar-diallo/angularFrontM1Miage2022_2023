import {NgModule} from "@angular/core";
import {Student} from "./student";
import {Course} from "./course";
import {Assignment} from "./assignment";
import {FormService} from "../../../../../services/form.service";
import {AddRoutingModule} from "./add-routing.module";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {AddComponent} from "./add.component";
import {CommonModule} from "@angular/common";
import {StepsModule} from "primeng/steps";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {CalendarModule} from "primeng/calendar";
import {InputTextareaModule} from "primeng/inputtextarea";

@NgModule({
  imports: [AddRoutingModule, ButtonModule, DropdownModule, FormsModule, CardModule, InputTextModule, CommonModule, StepsModule, DialogModule, ToastModule, CalendarModule, InputTextareaModule],
  declarations: [Student, Course, Assignment, AddComponent],
  exports: [
    AddComponent
  ],
  providers: [FormService]
})

export class AddModule {}
