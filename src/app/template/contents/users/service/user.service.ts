import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from 'src/app/configuration';
import { map } from 'rxjs/operators';
const headers = new HttpHeaders({'Content-Type':'application/json',
'Authorization':'Bearer '+ sessionStorage.getItem('token')});
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private config: Configuration) { }

  callData() {
    let url = this.config.getUrl() +'/user/all'
    return this.http.get(url,{headers: headers}).pipe(
      map((response: any) => {
        return response;
      }
      ));
  }
  saveUser(body: string){
    let url = this.config.getUrl() +'/user/save'
    return this.http.post(url, body, {headers: headers}).
    pipe(map((response: any) => {
      return response;
    }
    ));
  }
 
  findOneDataById(idParam:string){
    let url = this.config.getUrl() +'/user/getone/'+idParam;
    return this.http.get(url, {headers: headers}).pipe(
      map((response: any) => {
        return response;
      }
      ));
  }
  deleteUser(id: string){
    let url = this.config.getUrl() +'/user/delete/'+id;
    return this.http.get(url , {headers: headers}).pipe(
        map((response: any) => {
          //console.log('call privilege ' + response);
          return response;
        }
        ));
  }

}