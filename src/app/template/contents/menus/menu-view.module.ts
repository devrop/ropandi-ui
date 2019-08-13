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
  declarations: [MenuViewComponent],
  imports: [FormsModule,
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class MenuViewModule { }
