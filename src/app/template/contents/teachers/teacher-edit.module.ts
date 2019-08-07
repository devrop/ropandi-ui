import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeacherEditComponent } from './teacher-edit.component';
const routes: Routes = [

  {
    path: '',
    component: TeacherEditComponent
}
];


@NgModule({
  declarations: [TeacherEditComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TeacherEditModule { }
