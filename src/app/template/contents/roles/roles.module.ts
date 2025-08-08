import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: RolesComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    RolesComponent
  ]
})
export class RolesModule { }
