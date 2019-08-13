import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Configuration } from 'src/app/configuration';
import { map } from 'rxjs/operators';
import { RoleModel } from '../roles.component';
const headers = new HttpHeaders({'Content-Type':'application/json',
'Authorization':'Bearer '+ sessionStorage.getItem('token')});
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient,
    
    private config: Configuration) { }


    callData() {
      let url = this.config.getUrl() +'/role/all'
      return this.http.get(url, {headers: headers}).pipe(
        map((response: any) => {
          
          return response;
        }
        ));
    }
    savePrivilege(role: RoleModel) {
   
      let url = this.config.getUrl() +'/role/save'
      let body = JSON.stringify({
        id_role : role.id,
        role_name: role.role_name 
      });
      return this.http.post(url, body, {headers: headers}).
        pipe(map((response: any) => {
          return response;
        }
        ));
  
    }
  
    deleteMenu(id: string){
      let url = this.config.getUrl() +'/role/delete/'+id;
      return this.http.get(url , {headers: headers}).pipe(
          map((response: any) => {
            //console.log('call privilege ' + response);
            return response;
          }
          ));
    }
  
    findOneDataById(idParam:string){
      let url = this.config.getUrl() +'/role/getone/'+idParam;
      return this.http.get(url, {headers: headers}).pipe(
        map((response: any) => {
          return response;
        }
        ));
    }
}
