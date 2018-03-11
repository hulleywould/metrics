import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-choice',
  templateUrl: './table-choice.component.html',
  styleUrls: ['./table-choice.component.css']
})
export class TableChoiceComponent implements OnInit {

  @Input() choice;
  @Input() tables;

  constructor() { 
    
  }

  ngOnInit() {
    this.tables.forEach(t => {
      console.log("table in table choice " + t);  
    });
  }

  switchTable() {
    console.log("LOG: switch table " + this.choice);
    return this.choice;
  }

}
