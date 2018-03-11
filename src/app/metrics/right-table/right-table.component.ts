import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-table',
  templateUrl: './right-table.component.html',
  styleUrls: ['./right-table.component.css']
})
export class RightTableComponent implements OnInit {
  
  tables = ['Pricing Summary', 'Hedging', 'Pricing at Different Funding Levels'];
  choice = "";

  constructor() { }

  ngOnInit() {
  }

  selectTable(selectedChoice) {
    return this.choice = selectedChoice;
  }

}
