import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../template.component';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../template.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSignOut(){
    Swal.fire({
      title: 'Are you sure to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
         sessionStorage.removeItem('token');
         sessionStorage.removeItem('keys');
         sessionStorage.removeItem('menu');
         sessionStorage.removeItem('privilege');
         this.router.navigate(['']);
      }
    })
  }
}
