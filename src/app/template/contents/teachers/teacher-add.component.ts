import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class TeacherAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
