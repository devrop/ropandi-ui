import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuViewComponent } from './menu-view.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path: '',
    component: MenuViewComponent
}
];

@NgModule({
  declarations: [],
  imports: [FormsModule,
    CommonModule, RouterModule.forChild(routes),
    MenuViewComponent
  ]
})
export class MenuViewModule { }
