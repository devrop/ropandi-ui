import { Component, OnInit } from '@angular/core';
import { PrivilegeService } from './service/privilege.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-privilege',
  templateUrl: './privilege.component.html',
  styleUrls: ['../../template.component.css']
})
export class PrivilegeComponent implements OnInit {

  loading : boolean = true;
  privileges = [];

  constructor(private privilegesService: PrivilegeService,
    private router: Router) { }

  ngOnInit() {
    this.loadData();

  }

  loadData(){
    this.privilegesService.onCallData().subscribe(
      (data : string) =>{
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
        if(obj.status === 200){
          if(!(obj.data_entity === null)){
             for(let data1 of obj.data_entity){
                 let privilege = new PrivilegeModel(
                   data1.id,
                   data1.privilege_name,
                   this.converToYesOrNo(data1.flag_add),
                   this.converToYesOrNo(data1.flag_edit),
                   this.converToYesOrNo(data1.flag_view),
                   this.converToYesOrNo(data1.flag_delete));
                   this.privileges.push(privilege);
             }
  
          }
          this.loading = false;
        }
        },
        (err) => {
         console.log(err);
  
     }

    )

    
  }

  converToYesOrNo(value:string){
    if(value ==='1'){
      return "Yes";
    }else{
      return "No";
    }
  }
  onEdit(id:string){
     console.log('call id' + id)
     this.router.navigate(['contents/privileges/edit/',id]);
  }

  onAdd(){
    this.router.navigate(['contents/privileges/add']);
  }

  onView(id:string){
    this.router.navigate(['contents/privileges/view', id]);
  }

  onDelete(idParam: string){
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
         this.privilegesService.deletePrivilege(idParam).subscribe((data : string) =>{
          let metaData = JSON.stringify(data);
          let obj = JSON.parse(metaData);
           if(obj.status ===200 || obj.status ==='200'){
            Swal.fire(
              'Deleted!',
              'Your data has been deleted.',
              'success'
            );
            this.privileges = [];
            this.loadData();
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
          'delete failed',
          'Something wrong.',
         'error'
        )
       console.log(err);

   }
         )
      }
    })

  }


}
export class PrivilegeModel{

  constructor(
    public id :string,
    public privilege_name :string,
    public flag_add : string,
    public flag_edit : string,
    public flag_view : string,
    public flag_delete: string
  ) { }
}
export class Option{
  constructor(
    public id:string,
    public name:string
  )
  {

  }
 }