import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAddComponent } from './menu-add.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path: '',
    component: MenuAddComponent
}
];


@NgModule({
  declarations: [MenuAddComponent],
  imports: [FormsModule,
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MenuAddModule { }
