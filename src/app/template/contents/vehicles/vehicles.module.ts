import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  {
    path: '',
    component: VehiclesComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    VehiclesComponent
  ]
})
export class VehiclesModule { }
