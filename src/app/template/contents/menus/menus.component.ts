import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MenusService } from './service/menus.service';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';
import { CommonModule } from '@angular/common';
const menu='Menu';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class MenusComponent implements OnInit {
  flagAdd : boolean = false;
  flagEdit : boolean = false;
  flagView : boolean = false;
  flagDelete: boolean = false;

  
  menuName = 'List Menu';
  loading = false;
  menus = [];
  constructor(private menuService: MenusService,
    private router: Router,
    private utility: UtilityService) { }

  ngOnInit() {
    this.onLoadPrivilege();
    this.getDataMenu();
  }
  getDataMenu(){
    this.menuService.callData().subscribe(
      (data : string) =>{
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
        if(obj.status === 200){
          if(!(obj.data_entity === null)){
             for(let dt of obj.data_entity){
                 let menu = new ModelMenu(
                   dt.id_menu,
                   dt.menu_name,
                   dt.link,
                   this.convertToActive(dt.status),
                   dt.cetegory_code);
                   this.menus.push(menu);
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
  convertToActive(data: string){
   if(data ==='1'){
     return 'Active';
   }else{
     return 'No Active';
   }
  }

onAdd(){
  this.router.navigate(['contents/menus/add']);
}
onEdit(id:string){
  this.router.navigate(['contents/menus/edit', id]);
}

onView(id:string ){
  this.router.navigate(['contents/menus/view', id]);
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
      this.menuService.deleteMenu(id).subscribe((data : string) =>{
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
         if(obj.status ===200 || obj.status ==='200'){
          Swal.fire(
            'Deleted!',
            'Data has been deleted.',
            'success'
          );
          this.menus = [];
          this.getDataMenu();
         }else{
          Swal.fire(
            'Delete failed',
            'Something wrong. ',
           'error'
          );
          this.menus = [];
          this.getDataMenu();
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
export class ModelMenu{
  constructor(
    public id :string,
    public menu_name:string,
    public link: string,
    public status:string,
    public category_name: string
  ){

  }
}
export class CategoryModel{
  constructor(
   public id : string,
   public category_name :string
  ){

  }
}