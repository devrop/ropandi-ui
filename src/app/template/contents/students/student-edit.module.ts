import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentEditComponent } from './student-edit.component';

const routes: Routes = [

  {
    path: '',
    component: StudentEditComponent
}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    StudentEditComponent
  ]
})
export class StudentEditModule { }
