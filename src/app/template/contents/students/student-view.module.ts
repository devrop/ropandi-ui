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
  declarations: [StudentViewComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class StudentViewModule { }
