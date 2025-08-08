import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  imports: [RouterModule, HeaderComponent, SidebarComponent],
  standalone: true
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
