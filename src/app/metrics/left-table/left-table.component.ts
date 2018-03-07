import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-table',
  templateUrl: './left-table.component.html',
  styleUrls: ['./left-table.component.css']
})
export class LeftTableComponent implements OnInit {

  tables = ['Pricing Summary', 'Hedging', 'Pricing at Different Funding Levels'];
  choice = "";

  constructor() { }

  ngOnInit() {
    this.tables.forEach((c) => console.log(c));
  }

  selectTable(selectedChoice) {
    this.choice = selectedChoice;
    console.log(this.choice);
  }

}
