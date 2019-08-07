import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PrivilegeModel } from '../privilege.component';
import { Configuration } from 'src/app/configuration';

const headers = new HttpHeaders({'Content-Type':'application/json',
'Authorization':'Bearer '+ sessionStorage.getItem('token')});
@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {
  
  constructor(private http: HttpClient,
    private config: Configuration) { }
  
    

  onCallData() {
    let url = this.config.getUrl() +'/privilege/all'
    return this.http.get(url, {headers: headers}).pipe(
      map((response: any) => {
        console.log('call privilege ' + response);
        return response;
      }
      ));
  }

  findOneDataById(idParam:string){
    let url = this.config.getUrl() +'/privilege/getone/'+idParam;

    return this.http.get(url, {headers: headers}).pipe(
      map((response: any) => {
        console.log('call privilege ' + response);
        return response;
      }
      ));
  }

  deletePrivilege(idParam:string){
    let url = this.config.getUrl() + '/privilege/delete/'+idParam;

    return this.http.get(url, {headers: headers}).pipe(
        map((response: any) => {
          console.log('call privilege ' + response);
          return response;
        }
        ));
  }

  savePrivilege(privilege: PrivilegeModel) {
 
    let body = JSON.stringify({
      id : privilege.id,
      privilege_name: privilege.privilege_name,
      flag_add: privilege.flag_add,
      flag_edit: privilege.flag_edit,
      flag_view : privilege.flag_view,
      flag_delete :privilege.flag_delete
    });
    let url = this.config.getUrl() + '/privilege/save'
    return this.http.post(url , body, {headers: headers}).
      pipe(map((response: any) => {
        return response;
      }
      ));

  }
  

}
