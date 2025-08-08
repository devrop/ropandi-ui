import { Component, OnInit } from '@angular/core';
import { RoleService } from './service/role.service';
import { Router } from '@angular/router';
import { RoleModel } from './roles.component';
import { UtilityService } from 'src/app/utility.service';
import { SwalUtil } from 'src/app/swal-util';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class RoleAddComponent implements OnInit {
  menuName = 'Add Role';
  loading = false;
  model = {
    roleName: null
  }
  constructor(private roleService: RoleService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loading = true;
    //let statusFinal = this.converToNumber(this.model.status);
    let request = new RoleModel('save', this.model.roleName);
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
         console.log(err);
         SwalUtil.AlertError();
      }

    )

  }

}
