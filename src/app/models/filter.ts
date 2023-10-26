export class Filter {
    column_name: string;
    operator: string;
    value: any
    constructor() {
      this.column_name = '';
      this.operator = '';
      this.value = '';
    }
  }