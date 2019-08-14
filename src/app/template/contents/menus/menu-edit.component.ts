import { Component, OnInit } from '@angular/core';
import { MenusService } from './service/menus.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModelMenu } from './menus.component';
import { UtilityService } from 'src/app/utility.service';
import { SwalUtil } from 'src/app/swal-util';
const menu = 'Menu'
@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['../../template.component.css']
})
export class MenuEditComponent implements OnInit {

  menuName ='Edit Menu';
  loading = false;
  idParam = "";
  model = {
    id: null,
    menuName: null,
    menuLink: null,
    status: null
  }
  constructor(private menuService: MenusService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private utility: UtilityService)
     { }

  ngOnInit() {
    this.hashPrivilege();
    this.idParam = this.activeRouter.snapshot.params['id'];
    this.findOneMenubyId(this.idParam);
    console.log('id ========================== ' +  this.idParam);
  }

 findOneMenubyId(id: string){
    this.menuService.findOneDataById(id).subscribe(
      (data:string) => {
        //console.log('data ' + data);
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
          if (obj.status == '200' || obj.status == 200) {
               for(let data of obj.data_entity){
               this.model.menuName = data.menu_name;
               this.model.menuLink =  data.link;
               this.model.status = data.status;
               break;
               }
          } else {

          }

      }, (err) => {

      }
    );
 }

  onSubmit(){
    this.loading = true;
    //console.log("menu name " + this.model.menuName);
    //console.log("menu link " + this.model.menuLink);
    //console.log("status " + this.model.status);
    //console.log("status" + this.converToNumber(this.model.status));
    let statusFinal = this.converToNumber(this.model.status);
    let request = new ModelMenu(this.idParam, this.model.menuName, this.model.menuLink,statusFinal);
    this.menuService.savePrivilege(request).subscribe(
      (data:string) => {
        let obj = UtilityService.convertStringToJSON(data);
         if(obj.status ===200 || obj.status ==='200'){
           this.loading = false;
           SwalUtil.AlertSucces();
           this.router.navigate(['contents/menus']);
         }else {
           console.log('dd '+ obj.status);
          this.loading = false;
          SwalUtil.AlertError();
         }
      },
      (err) => {
        SwalUtil.AlertError();
      }

    )

  }
  converToNumber(data : boolean){
  if(data){
    return '1';
  }else {
    return '0';
  }
  }

  hashPrivilege(){
    if(!this.utility.hashPrivilegeEdit(menu)){
      SwalUtil.AlertDontHasPrivilege();
      this.router.navigate(['contents/menus']);
    }
  }
}
