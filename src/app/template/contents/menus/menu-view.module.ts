import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuViewComponent } from './menu-view.component';

const routes: Routes = [

  {
    path: '',
    component: MenuViewComponent
}
];

@NgModule({
  declarations: [MenuViewComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class MenuViewModule { }
