import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VehicleViewComponent } from './vehicle-view.component';
const routes: Routes = [

  {
    path: '',
    component: VehicleViewComponent
}
];

@NgModule({
  declarations: [VehicleViewComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class VehicleViewModule { }
