import { Component, OnInit } from '@angular/core';
import { EncrDecrService } from '../security/encr-decr.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class WelcomeComponent implements OnInit {
   
  constructor(private encrDecrService: EncrDecrService,
    private router: Router) { }

  ngOnInit() {

  }
 onClickViewCMS(){
  this.router.navigate(['login']);
 }

  

}
