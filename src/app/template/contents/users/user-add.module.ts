import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [

  {
    path: '',
    component: UserAddComponent
}
];
@NgModule({
  declarations: [],
  imports: [FormsModule,
    CommonModule, RouterModule.forChild(routes),
    UserAddComponent
  ]
})
export class UserAddModule { }
