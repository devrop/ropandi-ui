import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class StudentEditComponent implements OnInit {


 
  constructor() { }

  ngOnInit() {
  }

}
