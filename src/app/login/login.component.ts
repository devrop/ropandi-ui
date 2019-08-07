import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
//import swal  from 'sweetalert2';
import { EncrDecrService } from '../security/encr-decr.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../template/template.component.css']
})
export class LoginComponent implements OnInit {
  
  model: any = {};
  loading = false;


  constructor(private router: Router,
    private authService: AuthService,
    private encrDecrService: EncrDecrService) { }

  ngOnInit() {
  }

  onLogin(){
    this.loading = true;
    //console.log(this.model.username +' '+this.model.password)
    this.authService.callHttpSeverPost(this.model.username, this.model.password).subscribe(
      (data: string) => {
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
        //console.log('status : ' + obj.status)
        if(obj.status === 200){
          let datas = obj.data_entity;
           for(let data of datas){
               if( !(data===null) || !(data=== undefined)){
                 console.log('data ' + data);
                 this.setPrivilege(data);
                 break;     
              }
           }
          this.router.navigate(['contents']);
          this.loading = false;
        }else if(obj.status === 404){
          this.swallErrorPassword();
         // swal.fire('Username atau Password yang dimasukkan salah');
          this.loading = false;
        }else {
          this.swallErrorWebservice();
          //swal.fire('Terjadi kesalahan di webservice');
          this.loading = false;
        }

      }, (err) => {
        this.swallErrorWebservice();
       // swal.fire('Terjadi kesalahan di webservice');
        console.log(err);
        this.loading = false;
    }
      );
  }



  setPrivilege(data){
    let menus= '';
    let privileges  = '';
    for(let menu of data.menus){
      //console.log(menu.menu_name+'=' + menu.link +';');
       let temp:string = menu.menu_name +'='+ menu.link +';'; //
       menus = menus + temp;
      // console.log('temp = ' + temp);
      // console.log('menu ' + menu);
       let temPrivilege = menu.menu_name +'::'
       +'add='+menu.action_add+';'
       +'edit='+menu.action_edit+';'
       +'view='+menu.action_view+';'
       +'delete='+menu.action_delete+'//';
       privileges = privileges + temPrivilege;
    }
    let encryptMenu = this.encrDecrService.encryptData(menus);
    let encrytPrivile = this.encrDecrService.encryptData(privileges);
    sessionStorage.setItem('menu',encryptMenu);
    sessionStorage.setItem('privilege',encrytPrivile);
    sessionStorage.setItem('token',data.token);
  }
  
  swallErrorPassword(){
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'username or password you entered is incorrect. '
    })
  }
  swallErrorWebservice(){
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'An error occurred on the webservice. '
    })
  }
}
