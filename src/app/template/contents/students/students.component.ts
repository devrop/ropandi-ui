import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
