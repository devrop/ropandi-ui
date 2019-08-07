import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivilegeComponent } from './privilege.component';
import { Routes, RouterModule } from '@angular/router';
import { PrivilegeAddComponent } from './privilege-add.component';
import { PrivilegeViewComponent } from './privilege-view.component';
import { PrivilegeEditComponent } from './privilege-edit.component';
const privilegeRoutes: Routes = [
  {
      path: "",
      component: PrivilegeComponent
  }
];

@NgModule({
  declarations: [PrivilegeComponent],
  imports: [
    CommonModule, RouterModule.forChild(privilegeRoutes)
  ],
  exports: [
    RouterModule
]
})
export class PrivilegeModule { }
