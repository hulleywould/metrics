import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.css']
})
export class PresetsComponent implements OnInit {
  presets = ['Pricing Summary', 'Commodity Fees', 'Pricing Summary + Hedging'];
  chosenPreset: string;
  @Output() presetEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  selectedPreset(selection) {
    console.log("selected preset is " + selection);
    this.chosenPreset = selection;
    this.presetEvent.emit(this.chosenPreset);
  }

}
