import { Component, OnInit } from '@angular/core';
import { ModelMenu } from '../menus/menus.component';
import { PrivilegeModel } from '../privilege/privilege.component';
import { PrivilegeService } from '../privilege/service/privilege.service';
import { MenusService } from '../menus/service/menus.service';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';
import { SwalUtil } from 'src/app/swal-util';
import { UtilityService } from 'src/app/utility.service';
import { RoleService } from '../roles/service/role.service';
import { RoleModel } from '../roles/roles.component';
import { RoleJson, MenuPrivilege } from './users.component';
import { EncrDecrService } from 'src/app/security/encr-decr.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['../../template.component.css']
})
export class UserAddComponent implements OnInit {

  user = {
    id: null,
    username: null,
    password: null
  }

  menuPrivilege = {
    idMenu : null,
    idPrivilege : null
  }
  roleModel = {
    idRole : null,
    roleName: null,
  }

 displayMenu = 'none';
 displayRole = 'none';
 //role
 //from ws
 roles: RoleModel[] = [];
 userRoles : RoleJson[] = [];


 menus: ModelMenu[] = [];
 privileges: PrivilegeModel[] = [];
 //menuPrivileges: MenuPrivilege[] = [];
 userMenuPrivilege: MenuPrivilege[] =[];
 
 

 constructor(private privilegeService: PrivilegeService,
   private menuService: MenusService,
   private roleService: RoleService,
   private encript : EncrDecrService,
   //public dialog: MatDialog,
   private userService: UserService,
   private router: Router
   ) { }

 ngOnInit() {
   /*
   let m3 = new ModelMenu('0','Select','lll','1');
   let m1 = new ModelMenu('1','student','lll','1');
   let m2 = new ModelMenu('2','teacher','lll','1');
   this.menus.push(m1);
   this.menus.push(m2);
   this.menus.push(m3);
   let pri = new PrivilegeModel('0','select','1','1','1','1');
   let pri2 = new PrivilegeModel('1','admin','1','1','1','1');
   let pri3 = new PrivilegeModel('2','user','1','1','1','1');
   
   this.privileges.push(pri);
   this.privileges.push(pri2);
   this.privileges.push(pri3);
   */
   this.onLoadRole();
   this.onLoadMenu();
   this.onLoadPrivilege();
 }

 onLoadRole(){
  let menuDefault = new RoleModel('0','Please select :');
  this.roles.push(menuDefault);
  this.roleService.callData().subscribe(
    (data : string) =>{
      let metaData = JSON.stringify(data);
      let obj = JSON.parse(metaData);
      if(obj.status === 200){
        if(!(obj.data_entity === null)){
           for(let dt of obj.data_entity){
             //console.log(dt.id_role);
               let menu = new RoleModel(
                 dt.id_role,
                 dt.role_name);
                 this.roles.push(menu);
           }

        }
        //this.loading = false;
      }
      },
      (err) => {
       console.log(err);

   }
  );
 }
 onLoadMenu(){
   let deva = new ModelMenu('0','Please select','','');
   this.menus.push(deva);
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
                 dt.link,dt.status)
                 this.menus.push(menu);
           }

        }
        //this.loading = false;
      }
      },
      (err) => {
       console.log(err);

   }
  );
 }
onLoadPrivilege(){
  let deva = new PrivilegeModel('0','Please select','','','','');
  this.privileges.push(deva);
  this.privilegeService.onCallData().subscribe(
    (data : string) =>{
      let metaData = JSON.stringify(data);
      let obj = JSON.parse(metaData);
      if(obj.status === 200){
        if(!(obj.data_entity === null)){
           for(let data1 of obj.data_entity){
               let privilege = new PrivilegeModel(
                 data1.id,
                 data1.privilege_name,'','','','');
                 this.privileges.push(privilege);
           }

        }
       // this.loading = false;
      }
      },
      (err) => {
       console.log(err);

   });

  
}


 openModalDialogMenu(){
   this.defaultMenuPrivilege();
   this.displayMenu = 'block'; //Set block css
}


closeModalDialogMenu(){
 this.defaultMenuPrivilege();
 this.displayMenu = 'none'; //set none css after close dialog
}
openModalDialogRole(){
  this.defaultRole();
  this.displayRole = 'block'; //Set block css
}


closeModalDialogRole(){
this.defaultMenuPrivilege();
this.displayRole = 'none'; //set none css after close dialog
}

onSubmitRole(){
  let addmenu = this.roles.find(x => x.id == this.roleModel.idRole);
  let _addRole = new RoleJson(addmenu.id,addmenu.role_name)
  this.userRoles.push(_addRole);
  this.closeModalDialogRole();
}

onDeleteRole(idRole){
  console.log('click' + idRole);
  this.userRoles = this.userRoles.filter(x => x.id_role !=idRole);
}
onDeletePrivilegeMenu(idMenu){
  //console.log('click' + idRole);
  this.userMenuPrivilege = this.userMenuPrivilege.filter(x => x.id_menu !=idMenu);
}

onSubmitMenuPrivilege(){
  console.log('id ' + this.menuPrivilege.idMenu)
  let menu = this.menus.find(x => x.id === this.menuPrivilege.idMenu);
  let privilegeB = this.privileges.find(x => x.id === this.menuPrivilege.idPrivilege);
  let menuPrivilege =  new MenuPrivilege(this.menuPrivilege.idMenu,menu.menu_name,this.menuPrivilege.idPrivilege, privilegeB.privilege_name);
  this.userMenuPrivilege.push(menuPrivilege);
  this.defaultMenuPrivilege();
  this.closeModalDialogMenu();
}
defaultMenuPrivilege(){
 this.menuPrivilege.idMenu = '0';
 this.menuPrivilege.idPrivilege = '0';


}
defaultRole(){
  this.roleModel.idRole= '0';
}

onSumbitUser(){
  //get key
  const keys = sessionStorage.getItem('keys');
  let decrytedKey = this.encript.decryptData(keys);
  //encrypt password
  let passwordEnc = this.encript.enCrypPassword(decrytedKey,this.user.password);
  console.log('password ' + passwordEnc);
  //let passwordEnc = this.encript.encryptData(this.user.password);
  let body = JSON.stringify({
    id : this.user.id,
    username : this.user.username,
    password : passwordEnc,
    roles : this.userRoles,
    menus : this.userMenuPrivilege
  });
  console.log(body);
  this.userService.saveUser(body).subscribe(
   (data:string) => {
     let obj = UtilityService.convertStringToJSON(data);
      if(obj.status ===200 || obj.status ==='200'){
        //this.loading = false;
        SwalUtil.AlertSucces();
        this.router.navigate(['contents/users']);
      }else {
       //this.loading = false;
       SwalUtil.AlertError();
      }
   },
   (err) => {

   }
  )

}

}
