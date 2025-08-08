import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeacherViewComponent } from './teacher-view.component';
const routes: Routes = [

  {
    path: '',
    component: TeacherViewComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    TeacherViewComponent
  ]
})
export class TeacherViewModule { }
