import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['../../template.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class StudentViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
