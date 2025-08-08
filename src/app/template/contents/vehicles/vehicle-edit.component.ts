import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class VehicleEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
