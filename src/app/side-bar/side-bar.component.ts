import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  filters: any = [];
  columnsForFilter: string[] = [
    'gtin',
    'product_name',
    'product_desc',
    'price',
    'currency',
    'category',
    'gender',
    'quantity',
    'size',
    'style',
    'color',
  ];

  operators: any = [
    'equals',
    'not equal',
    'contains',
    'not contain',
    'less than or equal to',
    'greater than or equal to',
  ];

  @Output() updateFilters = new EventEmitter<string>();

  ngOnInit(): void {}

  addFilter() {
    this.filters.push(new Filter());
  }

  applyFilter() {
    this.updateFilters.emit(this.filters);
  }
}
