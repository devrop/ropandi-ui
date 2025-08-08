import { Component, OnInit } from '@angular/core';
import { RoleService } from './service/role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SwalUtil } from 'src/app/swal-util';
import { RoleModel } from './roles.component';
import { UtilityService } from 'src/app/utility.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class RoleEditComponent implements OnInit {

 
  menuName ='Edit Role';
  loading = false;
  idParam = "";
  model = {
    id: null,
    roleName: null
  }
  constructor(private roleService: RoleService,
    private router: Router,
    private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.idParam = this.activeRouter.snapshot.params['id'];
    this.findOneRolebyId(this.idParam);
  }

 findOneRolebyId(id: string){
    this.roleService.findOneDataById(id).subscribe(
      (data:string) => {
        //console.log('data ' + data);
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
          if (obj.status == '200' || obj.status == 200) {
               for(let data of obj.data_entity){
               this.model.roleName = data.role_name;
               break;
               }
          } else {

          }

      }, (err) => {
        console.log(err)
        SwalUtil.AlertError();
      }
    );
 }

  onSubmit(){
    this.loading = true;
    let request = new RoleModel(this.idParam, this.model.roleName);
    this.roleService.savePrivilege(request).subscribe(
      (data:string) => {
        let obj = UtilityService.convertStringToJSON(data);
         if(obj.status ===200 || obj.status ==='200'){
           this.loading = false;
           SwalUtil.AlertSucces();
           this.router.navigate(['contents/roles']);
         }else {
          this.loading = false;
          SwalUtil.AlertError();
         }
      },
      (err) => {
        SwalUtil.AlertError();
      }

    )

  }

}
