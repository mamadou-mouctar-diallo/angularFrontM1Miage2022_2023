import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import {FooterComponent} from "./assignment/pages/footer/footer.component";
import {HeaderComponent} from "./assignment/pages/header/header.component";
import {DashboardComponent} from "./assignment/pages/main/dashboard/dashboard.component";
import {AddComponent} from './assignment/pages/main/dashboard/assignment/add/add.component';
import {SidbebarComponent} from './assignment/pages/main/sidebar/sidbebar.component';
import {ManageComponent} from "./assignment/pages/main/dashboard/assignment/manage/manage.component";
import {DeleteComponent} from "./assignment/pages/main/dashboard/assignment/delete/delete.component";
import {UpdateComponent} from "./assignment/pages/main/dashboard/assignment/update/update.component";
import {ManageUserComponent} from './assignment/pages/main/dashboard/user/manage/manageUser.component';

import { AppComponent } from './app.component';
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {RouterLink} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from './assignment/pages/login/login.component'
import {AssignmentService} from "./assignment/services/assignment/assignment.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {MenuModule} from "primeng/menu";
import {ChartModule} from "primeng/chart";
import {SplitButtonModule} from "primeng/splitbutton";
import {MessagesService} from "./assignment/services/messages.service";
import {RatingModule} from "primeng/rating";
import {DropdownModule} from "primeng/dropdown";
import {DataViewModule} from "primeng/dataview";
import {DividerModule} from "primeng/divider";
import {DialogModule} from "primeng/dialog";
import {SidebarModule} from "primeng/sidebar";
import {LoaderComponent} from "./assignment/pages/loader/loader.component";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {NetworkInterceptor} from "./network.interceptor";
import {ToastModule} from "primeng/toast";
import {ManageUserModule} from "./assignment/pages/main/dashboard/user/manage/manageUser.module";
import {ToolbarModule} from "primeng/toolbar";
import {AddUserComponent} from "./assignment/pages/main/dashboard/user/manage/addUser/addUser.component";
import {SelectButtonModule} from "primeng/selectbutton";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CalendarModule} from "primeng/calendar";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'connect', component: LoginComponent},
  {path: 'add', component: AddComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'users', component: ManageUserComponent},
  {path: 'addUser', component: AddUserComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    AddComponent,
    SidbebarComponent,
    ManageComponent,
    DeleteComponent,
    UpdateComponent,
    LoaderComponent,
    ManageUserComponent,
    AddUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    PasswordModule,
    CheckboxModule,
    RouterLink,
    ButtonModule,
    RippleModule,
    InputTextModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    MenuModule,
    ChartModule,
    SplitButtonModule,
    RatingModule,
    DropdownModule,
    DataViewModule,
    RouterModule.forRoot(routes),
    DividerModule,
    DialogModule,
    SidebarModule,
    ProgressSpinnerModule,
    ToastModule,
    ManageUserModule,
    ToolbarModule,
    SelectButtonModule,
    ToolbarModule,
    InputNumberModule,
    RadioButtonModule,
    InputTextareaModule,
    CalendarModule
  ],
  providers: [AssignmentService, MessagesService,{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
