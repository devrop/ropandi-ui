import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrivilegeService } from './service/privilege.service';
import { PrivilegeModel, Option } from './privilege.component';
import { UtilityService } from 'src/app/utility.service';
import { SwalUtil } from 'src/app/swal-util';

@Component({
  selector: 'app-privilege-edit',
  templateUrl: './privilege-edit.component.html',
  styleUrls: ['../../template.component.css']
})
export class PrivilegeEditComponent implements OnInit {

  loading = false;
  idParam: string = '';
  model = {
    id : null,
    privilegeName : null,
    flagAdd : null,
    flagEdit : null,
    flagView : null,
    flagDelete : null
  };


  selectedData = 'Select Item';
  name = 'ok';
  datas = [
    new Option('1','Yes'),
    new Option('0','No'),
    new Option('','Please Select')
  ]
  constructor(private activeRouter: ActivatedRoute,
    private privilegeService : PrivilegeService,
    private router:Router
    ) { }

  ngOnInit() {
    this.idParam = this.activeRouter.snapshot.params['id'];
    console.log('data' + this.datas)
    this.onFindOneById(this.idParam);

  }


  setSelectedData(value:string){
    if (this.datas && value) {
      let status = this.datas.find(s => s.id == value);
      if (status)
        this.selectedData = '';
    }
    else{
    this.selectedData = 'Select Item';
  }
  }

  onFindOneById(idParam:string){
    this.privilegeService.findOneDataById(idParam).subscribe(
      (data:string) => {
        console.log('data ' + data);
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
        console.log('=========================================================');
          if (obj.status == '200' || obj.status == 200) {
            let entity = obj.data_entity;
            if(!(entity === null)){
              for(let dt of entity){
                this.idParam = dt.id;
                this.model.id =  dt.id;
                this.model.privilegeName = dt.privilege_name;
                this.model.flagAdd =  dt.flag_add;
                this.model.flagEdit =  dt.flag_edit;
                this.model.flagView =  dt.flag_view;
                this.model.flagDelete =  dt.flag_delete;
                }

            }

          } else {

          }

      }, (err) => {
         console.log(err);
      }
    );
  }

  converToYesOrNo(value:string){
    if(value ==='1'){
      return 'Yes';
    }else{
      return 'No';
    }
  }

  onSubmit(){
    this.loading = true;
    console.log('click here');
    let privilegeData = new PrivilegeModel(
    this.idParam,
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
