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
  declarations: [PrivilegeEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PrivilegeEditModule { }
