import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Configuration } from 'src/app/configuration';
import { map } from 'rxjs/operators';
import { VehicleModel } from '../vehicles.component';

const headers = new HttpHeaders({'Content-Type':'application/json',
'Authorization':'Bearer '+ sessionStorage.getItem('token')});
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private http: HttpClient,
    private config: Configuration) { }
  
    

  onCallData() {
    let url = this.config.getUrl() +'/vehicle/all'
    return this.http.get(url, {headers: headers}).pipe(
      map((response: any) => {
        return response;
      }
      ));
  }

  findOneDataById(idParam:string){
    let url = this.config.getUrl() +'/vehicle/getone/'+idParam;

    return this.http.get(url, {headers: headers}).pipe(
      map((response: any) => {
        return response;
      }
      ));
  }

  deleteById(idParam:string){
    let url = this.config.getUrl() + '/vehicle/delete/'+idParam;

    return this.http.get(url, {headers: headers}).pipe(
        map((response: any) => {
          return response;
        }
        ));
  }

  saveObject(vehicle: VehicleModel) {
 
    let body = JSON.stringify({
      id_vehicle : vehicle.id_vehicle,
      police_number: vehicle.police_number,
      brand: vehicle.brand,
      rental_price: vehicle.rental_price,
      unit_stock : vehicle.unit_stock,
      created_by : vehicle.created_by
    });
    let url = this.config.getUrl() + '/privilege/save'
    return this.http.post(url , body, {headers: headers}).
      pipe(map((response: any) => {
        return response;
      }
      ));

  }
  
}
