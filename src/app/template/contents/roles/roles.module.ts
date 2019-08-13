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
  declarations: [RolesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RolesModule { }
