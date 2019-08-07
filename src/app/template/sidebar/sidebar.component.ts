import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

export class SidebarMenu {
  constructor(
   public id: string,
   public  name: string,
   public  link: string){

    }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../template.component.css']
})
export class SidebarComponent implements OnInit {
  menus =[];
  name ='';
  constructor(private utility: UtilityService) { }

  ngOnInit() {
    this.loadListMenu();

  }
  loadListMenu(){
    let menusFromSession = this.utility.loadListMenuAndUrl();
    //console.log('menuFromSession' + menusFromSession);
    for(let menu of menusFromSession){
      let dataArray = menu.split('=');
      let id = dataArray[0]+dataArray[1];
     // console.log(dataArray[1]);
        if(dataArray[1] === undefined){

        }else{
          let data = new SidebarMenu(id,dataArray[0], dataArray[1]);
          this.menus.push(data);
        }
    }
  }

}
