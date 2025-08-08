import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VehicleEditComponent } from './vehicle-edit.component';
const routes: Routes = [

  {
    path: '',
    component: VehicleEditComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    VehicleEditComponent
  ]
})
export class VehicleEditModule { }
