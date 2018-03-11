import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-table',
  templateUrl: './big-table.component.html',
  styleUrls: ['./big-table.component.css']
})
export class BigTableComponent implements OnInit {

  tables = ['Pricing Summary', 'Hedging', 'Pricing at Different Funding Levels'];
  choice = "";

  constructor() { }

  ngOnInit() {
    this.tables.forEach((c) => console.log(c));
  }

  selectTable(selectedChoice) {
    return this.choice = selectedChoice;
  }

}
