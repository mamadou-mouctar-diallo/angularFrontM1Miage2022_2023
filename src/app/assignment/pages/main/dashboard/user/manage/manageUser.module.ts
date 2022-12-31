import {NgModule} from "@angular/core";
import {ManageUserComponent} from "./manageUser.component";
import {RouterModule, Routes} from "@angular/router";
import {AddUserComponent} from "../add/addUser.component";
import {UpdateUserComponent} from "../update/updateUser.component";
const routes: Routes = [
  {path: 'addUser', component: AddUserComponent},
  {path: 'updateUser', component: UpdateUserComponent}
]

@NgModule({
  declarations:[
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  bootstrap: [ManageUserComponent]
})

export class ManageUserModule {}
