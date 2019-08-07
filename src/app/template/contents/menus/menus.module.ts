import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus.component';

const routes: Routes = [

  {
    path: '',
    component: MenusComponent
}
];


@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MenusModule { }
