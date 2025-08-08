import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class VehicleViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
