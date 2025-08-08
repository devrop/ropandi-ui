import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrivilegeEditComponent } from './privilege-edit.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path: "",
    component: PrivilegeEditComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PrivilegeEditComponent
  ]
})
export class PrivilegeEditModule { }
