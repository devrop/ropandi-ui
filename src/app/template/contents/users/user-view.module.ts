import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: UserViewComponent
}
];

@NgModule({
  declarations: [],
  imports: [FormsModule,
    CommonModule, RouterModule.forChild(routes),
    UserViewComponent
  ]
})
export class UserViewModule { }
