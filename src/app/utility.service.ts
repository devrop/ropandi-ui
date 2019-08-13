import { Injectable } from '@angular/core';
import { EncrDecrService } from './security/encr-decr.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private encrypt: EncrDecrService) { }

  loadPrivilege(menuName:string): Map<string, boolean>{
    let map = new Map();
    let metaData = this.getMenuFromSessionByName().get(menuName);
    let arrayData = metaData.split(';');
    for (let data of arrayData) {

      let dataValue = data.split('=');
      let flag = this.converToBoolean(dataValue[1]);
      console.log('data '+ dataValue[0] + ' value ' + flag)
      map.set(dataValue[0], flag);
    }
    return map;
  }

  getMenuFromSessionByName(): Map<string,string>{
    let metaDataPrivilege = sessionStorage.getItem('privilege');
    let encryptMetaData = this.encrypt.decryptData(metaDataPrivilege);
    //console.log('enc' + encryptMetaData);
    let arrayData = encryptMetaData.split('//'); // student:add=1;edit=1;view=1;delete=1;
    let mapData = new Map();
    for(let data of arrayData){
      let value = data.split('::');
      mapData.set(value[0],value[1]);
    }
    return mapData;
  }
  converToBoolean(code:string){
    if(code ==='1'){
      return true;
    }else{
      return false;
    }
  }
  loadListMenuAndUrl(): string[] {
    let metaData = sessionStorage.getItem('menu');
    let menuData = this.encrypt.decryptData(metaData);
   // console.log('menu data' + menuData)
    return menuData.split(';');
  }
  static convertStringToJSON(data:string){
    let metaData = JSON.stringify(data);
    let obj = JSON.parse(metaData);
    return obj;
  }

   hashPrivilegeEdit(menu){
    let privilege = this.loadPrivilege(menu);
     return privilege.get('edit');
  }
}
