import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  styleUrls: ['../template.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class SidebarComponent implements OnInit {
  menusContents =[];
  menusSettings=[];
  name ='';
  constructor(private utility: UtilityService) { }

  ngOnInit() {
    this.loadListMenu();

  }
  loadListMenu(){
    let menusFromSession = this.utility.loadListMenuAndUrl();
    //console.log('menuFromSession' + menusFromSession);
    for(let menu of menusFromSession){
      let dataArray = menu.split('='); //student = hhh &&;
      let id = dataArray[0]+dataArray[1] + dataArray[2];
      let link = dataArray[1];
      let cat = dataArray[2]
     // console.log(dataArray[1]);
        if(link === undefined && cat === undefined ){

        }else{
          if(cat === 'C'){
            let data = new SidebarMenu(id,dataArray[0], link);
            this.menusContents.push(data)
          }else if(cat === 'S'){
            let data = new SidebarMenu(id,dataArray[0], link);
            this.menusSettings.push(data);
          }
        }
    }
  }

}
