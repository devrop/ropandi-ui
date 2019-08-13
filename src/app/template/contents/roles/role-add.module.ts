import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoleAddComponent } from './role-add.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path: '',
    component: RoleAddComponent
}
];


@NgModule({
  declarations: [RoleAddComponent],
  imports: [ FormsModule,
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RoleAddModule { }
