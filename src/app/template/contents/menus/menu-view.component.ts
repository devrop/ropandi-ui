import { Component, OnInit } from '@angular/core';
import { MenusService } from './service/menus.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class MenuViewComponent implements OnInit {

  menuName ='Add Menu';
  loading = false;
  idParam = "";
  model = {
    id: null,
    menuName: null,
    menuLink: null,
    status: null
  }
  constructor(private menuService: MenusService,
    private router: Router,
    private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.idParam = this.activeRouter.snapshot.params['id'];
    this.findOneMenubyId(this.idParam);
  }

 findOneMenubyId(id: string){
    this.menuService.findOneDataById(id).subscribe(
      (data:string) => {
        //console.log('data ' + data);
        let metaData = JSON.stringify(data);
        let obj = JSON.parse(metaData);
          if (obj.status == '200' || obj.status == 200) {
               for(let data of obj.data_entity){
               this.model.menuName = data.menu_name;
               this.model.menuLink =  data.link;
               this.model.status = data.status;
               break;
               }
          } else {

          }

      }, (err) => {

      }
    );
 }

  converToNumber(data : boolean){
  if(data){
    return '1';
  }else {
    return '0';
  }
  }


}
