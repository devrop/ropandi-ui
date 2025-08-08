import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivilegeAddComponent } from './privilege-add.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const privilegeAddRoutes: Routes = [
  {
      path: "",
      component: PrivilegeAddComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,RouterModule.forChild(privilegeAddRoutes),
    PrivilegeAddComponent
  ]
})
export class PrivilegeAddModule { }
