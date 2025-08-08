import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrivilegeService } from './service/privilege.service';
import { Option } from './privilege.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-privilege-view',
  templateUrl: './privilege-view.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class PrivilegeViewComponent implements OnInit {

 
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
  created

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



}
