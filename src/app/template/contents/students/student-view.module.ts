import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentViewComponent } from './student-view.component';

const routes: Routes = [

  {
    path: '',
    component: StudentViewComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    StudentViewComponent
  ]
})
export class StudentViewModule { }
