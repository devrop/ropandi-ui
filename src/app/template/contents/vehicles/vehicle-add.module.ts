import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleAddComponent } from './vehicle-add.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  {
    path: '',
    component: VehicleAddComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    VehicleAddComponent
  ]
})
export class VehicleAddModule { }
