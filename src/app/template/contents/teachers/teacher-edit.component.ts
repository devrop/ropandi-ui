import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class TeacherEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
