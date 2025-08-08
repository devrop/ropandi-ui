import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class VehicleAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
