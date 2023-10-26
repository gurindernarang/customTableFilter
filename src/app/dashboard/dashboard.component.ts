import { Component, OnInit } from '@angular/core';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filters(data: Filter[]) {
    console.log("data", data);
  }
  
}
