import { Component, OnInit } from '@angular/core';
import { VehicleService } from './service/vehicle.service';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
const menu='Vehicle';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class VehiclesComponent implements OnInit {
  flagAdd : boolean = false;
  flagEdit : boolean = false;
  flagView : boolean = false;
  flagDelete: boolean = false;

  
  menuName = 'List Vehicle';
  loading = false;
  vehicles = [];
  constructor(private vehicleService: VehicleService,
    private router: Router,
    private utility: UtilityService) { }

  ngOnInit() {
    this.onLoadPrivilege();
    this.getDataVehicle();
  }
  getDataVehicle(){
  /**
   * public id_vehicle: string,
    public police_number: string,
    public brand: string,
    public rental_price: string,
    public unit_stock: string,
    public created_by: string
   * 
   */

    this.vehicleService.onCallData().subscribe(
      (data : string) =>{
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
        if(obj.status === 200){
          if(!(obj.data_entity === null)){
             for(let dt of obj.data_entity){
                 let ve = new VehicleModel(
                   dt.id_vehicle,
                   dt.police_number,
                   dt.brand,
                   dt.rental_price,
                   dt.unit_stock,
                   dt.created_by);
                   this.vehicles.push(ve);
             }

          }
          this.loading = false;
        }
        },
        (err) => {
         console.log(err);

     }
    );
  }
 
onAdd(){
  this.router.navigate(['contents/vehicles/add']);
}
onEdit(id:string){
  this.router.navigate(['contents/vehicles/edit', id]);
}

onView(id:string ){
  this.router.navigate(['contents/vehicles/view', id]);
}
onDelete(id: string){
  Swal.fire({
    title: 'Are you sure to delete this data?',
          icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Delete!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
          if (result.isConfirmed) {
      this.vehicleService.deleteById(id).subscribe((data : string) =>{
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
         if(obj.status ===200 || obj.status ==='200'){
          Swal.fire(
            'Deleted!',
            'Data has been deleted.',
            'success'
          );
          this.vehicles = [];
          this.getDataVehicle();
         }else{
          Swal.fire(
            'Delete failed',
            'Something wrong. ',
           'error'
          );
         }
       },

    (err) => {
      Swal.fire(
        'Delete failed',
        'Something wrong. ',
       'error'
      )
     console.log(err);

 }
       )
    }
  })
}

onLoadPrivilege(){
  let privilege =  this.utility.loadPrivilege(menu);
  this.flagAdd = privilege.get('add');
  this.flagEdit = privilege.get('edit');
  this.flagView = privilege.get('view');
  this.flagDelete = privilege.get('delete');
}
}
export class VehicleModel{
  constructor(
    public id_vehicle: string,
    public police_number: string,
    public brand: string,
    public rental_price: string,
    public unit_stock: string,
    public created_by: string

  ){

  }

}
