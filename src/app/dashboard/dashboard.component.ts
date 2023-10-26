import { Component, OnInit } from '@angular/core';
import { tableData } from '../data/data';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  records: any[] = [];
  originalData: any[] = Object.values(tableData);

  ngOnInit(): void {
    this.records = [...this.originalData];
  }

  filters(filtersArr: any) {
    console.log('data', filtersArr);
    filtersArr.forEach((_filter: Filter) => {
      this.records = this.records.filter((record) => {

        return this.checkRecord(record, _filter);
      });
    });
  }

  checkRecord(record: any, _filter: Filter) {
    let valid = false;
    switch (_filter.operator) {
      case 'equals':
        valid = record[_filter.column_name] == _filter.value;
        break;
      case 'not equal':
        valid = record[_filter.column_name] != _filter.value;
        break;
      case 'contains':
        // code block
        break;
      case 'not contain':
        // code block
        break;
      case 'less than or equal to':
        // code block
        break;
      case 'greater than or equal to':
        // code block
        break;
      default:
      // code block
    }
    console.log("valid", valid);
    return valid;
  }
}
