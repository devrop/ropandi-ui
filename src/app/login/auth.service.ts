import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Configuration } from '../configuration';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private config: Configuration) { }

  callHttpSeverPost(usernameParam: string,passwordParam:string){
    let body = JSON.stringify({ username: usernameParam, password: passwordParam });
    //let url = 'https://demo-ropandi-backend.herokuapp.com/login'
    let url = this.config.getUrl()+'/auth/login';
    //console.log('url ' + this.config.getUrl())
    return this.http.post(url, body, httpOptions).
        pipe(map((response: any) => {
          //this.responseStatus = response.status;
          //console.log('response code : ' + response);
          return response;
        }
         ));


  }
  callGet(){
    let url = this.config.getUrl()+'/auth/getkey';
    //console.log('url ' + this.config.getUrl())
    let key = 'ropandi';
     let body = JSON.stringify({ token: key, status: key});
    return this.http.post(url,body, httpOptions).
        pipe(map((response: any) => {
          return response;
        }
         ));


  }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    if(token && !(token === null)){
      return true;
    }else{
      return false;
    }
  }
}
