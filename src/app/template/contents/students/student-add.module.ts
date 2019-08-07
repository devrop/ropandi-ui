import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentAddComponent } from './student-add.component';

const routes: Routes = [

  {
    path: '',
    component: StudentAddComponent
}
];


@NgModule({
  declarations: [StudentAddComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class StudentAddModule { }
