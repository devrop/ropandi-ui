import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeacherAddComponent } from './teacher-add.component';
const routes: Routes = [

  {
    path: '',
    component: TeacherAddComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    TeacherAddComponent
  ]
})
export class TeacherAddModule { }
