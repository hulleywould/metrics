import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.css']
})
export class PresetsComponent implements OnInit {
  presets = ['Commodity Fees', 'Pricing Summary + Hedging'];

  constructor() { }

  ngOnInit() {

  }

  selectedPreset(selection) {
    console.log("selected preset is " + selection);
  }

}
