import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RoleViewComponent } from './role-view.component';

const routes: Routes = [

  {
    path: '',
    component: RoleViewComponent
}
];
@NgModule({
  declarations: [RoleViewComponent],
  imports: [FormsModule,
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RoleViewModule { }
