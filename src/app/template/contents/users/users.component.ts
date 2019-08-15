import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../token.service';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../template.component.css']
})
export class UsersComponent implements OnInit {
  flagAdd : boolean = false;
  flagEdit : boolean = false;
  flagView : boolean = false;
  flagDelete: boolean = false;

  userLogins: UsersLogin[] = [];
  userlogin: UsersLogin = null;


  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.getDataUsers();
  }



  getDataUsers() {
    this.userService.callData().subscribe((data: string) => {
      let metaData = JSON.stringify(data);
      let obj = JSON.parse(metaData);
      if (obj.status === 200) {
        if (!(obj.data_entity === null)) {
          for (let data of obj.data_entity) {
            //getMenu
            let menus = '';
            let indexM = 0;
            for (let menu of data.menus) {
              if (indexM == 0) {
                menus = menu.menu_name;
              } else {
                menus = menus + " , " + menu.menu_name;
              }
              indexM++;

            }

            let roles = '';
            let index = 0;
            for (let role of data.roles) {
              if (index == 0) {
                roles = role.role_name;
              } else {
                roles = roles + " , " + role.role_name;
              }
              index++;
            }
            console.log('id user ' + data.id)
            let user = new UsersLogin(data.id,data.username, data.password, roles, menus);
            this.userLogins.push(user);
          }

        }

      }

    },
      (err) => {
        console.log(err);

      })
  }
  onAdd() {
    this.router.navigate(['contents/users/add']);
  }

  onView(id) {
    this.router.navigate(['contents/users/view', id]);
  }
  onEdit(id) {
    this.router.navigate(['contents/users/edit', id]);
  }
  onDelete(id:string) {
    Swal.fire({
      title: 'Are you sure to delete this data?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {

        this.userService.deleteUser(id).subscribe((data : string) =>{
          let metaData = JSON.stringify(data);
          let obj = JSON.parse(metaData);
           if(obj.status ===200 || obj.status ==='200'){
            Swal.fire(
              'Deleted!',
              'Data has been deleted.',
              'success'
            );
            this.userLogins = [];
            this.getDataUsers();
           }else{
            Swal.fire(
              'Delete failed',
              'Something wrong. ',
             'error'
            );
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
}
export class UsersLogin {
  constructor(
    public idUser:string,
    public username: string,
    public password: string,
    public roles: string,
    public menus: string

  ) {

  }
}
export class MenuPrivilege{
  constructor(
    public id_menu: string,
    public menu_name: string,
    public id_privilege: string,
    public privilege: string
  ){

  }

}
export class RoleJson{
  constructor(
    public id_role: string,
    public role_name:string
  ){

  }
}
