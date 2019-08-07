import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../token.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../template.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    let token = this.tokenService.getToken();
    console.log('token in users ' + token);
  }

}
