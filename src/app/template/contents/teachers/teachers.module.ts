import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  {
    path: '',
    component: TeachersComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    TeachersComponent
  ]
})
export class TeachersModule { }
