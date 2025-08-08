import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrivilegeViewComponent } from './privilege-view.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [

  {
    path: "",
    component: PrivilegeViewComponent
}
];
@NgModule({
  declarations: [],
  imports: [FormsModule,
    CommonModule, RouterModule.forChild(routes),
    PrivilegeViewComponent
  ]
})
export class PrivilegeViewModule { }
