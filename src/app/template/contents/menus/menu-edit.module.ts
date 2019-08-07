import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuEditComponent } from './menu-edit.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: MenuEditComponent
}
];



@NgModule({
  declarations: [MenuEditComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MenuEditModule { }
