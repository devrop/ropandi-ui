import { Component, OnInit } from '@angular/core';
import { RoleService } from './service/role.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['../../template.component.css']
})
export class RolesComponent implements OnInit {

  menuName = 'List Role';
  loading = false;
  roles = [];
  constructor(private rolesService: RoleService,
    private router: Router ) { }

  ngOnInit() {
    this.getDataMenu();
  }
  getDataMenu(){
    this.rolesService.callData().subscribe(
      (data : string) =>{
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
        if(obj.status === 200){
          if(!(obj.data_entity === null)){
             for(let dt of obj.data_entity){
               //console.log(dt.id_role);
                 let menu = new RoleModel(
                   dt.id_role,
                   dt.role_name);
                   this.roles.push(menu);
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
  this.router.navigate(['contents/roles/add']);
}
onEdit(id:string){
  this.router.navigate(['contents/roles/edit', id]);
}

onView(id:string ){
  this.router.navigate(['contents/roles/view', id]);
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
      this.rolesService.deleteMenu(id).subscribe((data : string) =>{
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
         if(obj.status ===200 || obj.status ==='200'){
          Swal.fire(
            'Deleted!',
            'Data has been deleted.',
            'success'
          );
          this.roles = [];
          this.getDataMenu();
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

}

export class RoleModel {

  constructor(
    public id :string,
    public role_name:string
  ){

  }
}
