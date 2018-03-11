import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-table',
  templateUrl: './left-table.component.html',
  styleUrls: ['./left-table.component.css']
})
export class LeftTableComponent implements OnInit {

  @Input() selectedPreset;
  tables = ['Pricing Summary', 'Hedging', 'Pricing at Different Funding Levels'];
  choice = "";

  constructor() { }

  ngOnInit() {
    this.tables.forEach((c) => console.log(c));
    console.log("selected Preset from Left Table " + this.selectedPreset);
  }

  selectTable(selectedChoice) {
    console.log("LOG: left table selected: " + selectedChoice);
    return this.choice = selectedChoice;
  }

}
