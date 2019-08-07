import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit.component';
const routes: Routes = [

  {
    path: '',
    component: UserEditComponent
}
];

@NgModule({
  declarations: [UserEditComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserEditModule { }
