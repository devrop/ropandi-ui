import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add.component';
const routes: Routes = [

  {
    path: '',
    component: UserAddComponent
}
];
@NgModule({
  declarations: [UserAddComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserAddModule { }
