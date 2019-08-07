import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Option, PrivilegeModel } from './privilege.component';
import { PrivilegeService } from './service/privilege.service';
import { UtilityService } from 'src/app/utility.service';
import { SwalUtil } from 'src/app/swal-util';

const defaultA = 'Please select';
@Component({
  selector: 'app-privilege-add',
  templateUrl: './privilege-add.component.html',
  styleUrls: ['../../template.component.css']
})
export class PrivilegeAddComponent implements OnInit {

  loading : boolean = false;
  model = {
    privilegeName : null,
    flagAdd : null,
    flagEdit : null,
    flagView : null,
    flagDelete : null
  };
  datas = [
    new Option('1','Yes'),
    new Option('0','No'),
    new Option('','Please select')
  ]
  constructor(
    private privilegeService : PrivilegeService,
    private router : Router) { }

  ngOnInit() {
    this.model.flagAdd =  '';
    this.model.flagEdit =  '';
    this.model.flagView =  '';
    this.model.flagDelete =  '';

  }
  onSubmit(){
    this.loading = true;
    // console.log('click here');
    let privilegeData = new PrivilegeModel('save',
      this.model.privilegeName,
      this.model.flagAdd,
      this.model.flagEdit,
       this.model.flagView,
      this.model.flagDelete
       );
      this.privilegeService.savePrivilege(privilegeData).subscribe(
    (data:string) => {
         let obj = UtilityService.convertStringToJSON(data);
     if(obj.status ===200 || obj.status ==='200'){
            this.loading = false;
           SwalUtil.AlertSucces();
           this.router.navigate(['contents/privileges']);
          }else {
           this.loading = false;
           SwalUtil.AlertError();
          }
       },
       (err) => {

       }
     );

  }


}
