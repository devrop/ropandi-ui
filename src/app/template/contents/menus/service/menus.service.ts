import { Injectable } from '@angular/core';
import { ModelMenu } from '../menus.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from 'src/app/configuration';
import { map } from 'rxjs/operators';
const headers = new HttpHeaders({'Content-Type':'application/json',
'Authorization':'Bearer '+ sessionStorage.getItem('token')});
@Injectable({
  providedIn: 'root'
})
export class MenusService {
  constructor(private http: HttpClient,
    
    private config: Configuration) { }


  callData() {
    let url = this.config.getUrl() +'/menu/all'
    return this.http.get(url, {headers: headers}).pipe(
      map((response: any) => {
        console.log('call privilege ' + response);
        return response;
      }
      ));
  }
  savePrivilege(menu: ModelMenu) {
 
    let url = this.config.getUrl() +'/menu/save'
    let body = JSON.stringify({
      id_menu : menu.id,
      menu_name: menu.menu_name,
      link: menu.link,
      status: menu.status
    });
    return this.http.post(url + 'menu/save', body, {headers: headers}).
      pipe(map((response: any) => {
        //this.responseStatus = response.status;
        //console.log('response code : ' + this.responseStatus);
        return response;
      }
      ));

  }

  deleteMenu(id: string){
    let url = this.config.getUrl() +'/menu/delete/'+id;
    return this.http.get(url , {headers: headers}).pipe(
        map((response: any) => {
          //console.log('call privilege ' + response);
          return response;
        }
        ));
  }

  findOneDataById(idParam:string){
    let url = this.config.getUrl() +'/menu/getone/'+idParam;
    return this.http.get(url, {headers: headers}).pipe(
      map((response: any) => {
        console.log('call menu ' + response);
        return response;
      }
      ));
  }
}
