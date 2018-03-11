import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  
  selectedPreset: string;

  constructor() { }

  ngOnInit() {
    this.selectedPreset = "Pricing Summary";
  }

  recievePreset(preset) {
    this.selectedPreset = preset;
    console.log("metrics recieved Preset is " + this.selectedPreset);
  }
}
