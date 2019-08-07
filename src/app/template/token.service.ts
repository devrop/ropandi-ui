import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../configuration';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token :string;

  constructor(private http: HttpClient,
    private config: Configuration) { }
   
   getToken(){
    //let bodyToken = sessionStorage.getItem('body-token');
    let bodyToken = 'ydmwsTA2n1JLRHoev1PTwMgXk4YDPD2Vg4H8xHVpAUNu8HjJO2NMrwXxwizE__30';
    this.callWS(bodyToken).subscribe( data =>{
      let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
        if(!(obj === undefined)){
          this.token = obj.token;
        }
        this.update();
        
   });
   return this.update();
  }
  update(){
    console.log(this.token);
    return this.token;
    
  }



   callWS(bodyToken){
     let url = this.config.getUrl()+'/auth/accestoken/'+bodyToken
    return this.http.get(url).
    pipe(map((response: any) => {
      //this.responseStatus = response.status;
      //console.log('response code : ' + this.responseStatus);
      return response;
    }
     ));
   }
}
