import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class TeachersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
