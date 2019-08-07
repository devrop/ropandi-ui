import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view.component';
const routes: Routes = [
  {
    path: '',
    component: UserViewComponent
}
];

@NgModule({
  declarations: [UserViewComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserViewModule { }
