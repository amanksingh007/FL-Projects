import { Injectable } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';
@Injectable({
  providedIn: 'root'
})
export class MockService {
  data:any = [
  {
    name: 'Test 1',
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 2',
    age: 11,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 4',
    age: 10,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  ];
  options = { 
    fieldSeparator: ',',
    filename:"report",
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: false,
    headers: ['Name', 'Age', 'Avg.',"Approved","Description"]
  };
  csvExporter;
  constructor() { 
    this.csvExporter = new ExportToCsv(this.options);
  }

  downloadAsCSV(){
    this.csvExporter.generateCsv(this.data);
  }
}
