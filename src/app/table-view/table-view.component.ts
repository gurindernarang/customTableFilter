import { Component, OnInit } from '@angular/core';
import { tableData } from '../data/data';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  data: any = {};
  constructor() { }

  ngOnInit(): void {
    this.data = Object.values(tableData);
    console.log("Data", this.data);
  }

}
