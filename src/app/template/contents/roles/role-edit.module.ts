import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoleEditComponent } from './role-edit.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path: '',
    component: RoleEditComponent
}
];

@NgModule({
  declarations: [RoleEditComponent],
  imports: [FormsModule,
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RoleEditModule { }
