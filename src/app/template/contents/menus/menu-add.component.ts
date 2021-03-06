import { Component, OnInit } from '@angular/core';
import { MenusService } from './service/menus.service';
import { Router } from '@angular/router';
import { ModelMenu, CategoryModel } from './menus.component';
import { UtilityService } from 'src/app/utility.service';
import { SwalUtil } from 'src/app/swal-util';
const category = [ new CategoryModel('0','Please Select'),new CategoryModel('C','Contents'),new CategoryModel('S','Settings')];
@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['../../template.component.css']
})
export class MenuAddComponent implements OnInit {
  categorys = category;
  
  menuName = 'Add Menu';
  loading = false;
  model = {
    menuName: null,
    menuLink: null,
    status: null,
    categoryCode: null
  }
  constructor(private menuService: MenusService,
    private router: Router) { }

  ngOnInit() {
    this.model.categoryCode = '0'
  }

  onSubmit(){
    this.loading = true;
    let statusFinal = this.converToNumber(this.model.status);
    let request = new ModelMenu('save', this.model.menuName, this.model.menuLink,statusFinal, this.model.categoryCode);
    this.menuService.savePrivilege(request).subscribe(
      (data:string) => {
        let obj = UtilityService.convertStringToJSON(data);
         if(obj.status ===200 || obj.status ==='200'){
           this.loading = false;
           SwalUtil.AlertSucces();
           this.router.navigate(['contents/menus']);
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
  converToNumber(data : boolean){
  if(data){
    return '1';
  }else {
    return '0';
  }
  }
}
