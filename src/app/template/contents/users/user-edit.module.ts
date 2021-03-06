import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [

  {
    path: '',
    component: UserEditComponent
}
];

@NgModule({
  declarations: [UserEditComponent],
  imports: [FormsModule,
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserEditModule { }
