import { Component, OnInit } from '@angular/core';
import { RoleService } from './service/role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SwalUtil } from 'src/app/swal-util';
import { RoleModel } from './roles.component';

@Component({
  selector: 'app-role-view',
  templateUrl: './role-view.component.html',
  styleUrls: ['../../template.component.css']
})
export class RoleViewComponent implements OnInit {

 
  menuName ='View Role';
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
            SwalUtil.AlertError();
          }

      }, (err) => {
        console.log(err)
        SwalUtil.AlertError();
      }
    );
 }

  
}
