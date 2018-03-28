import { Component, OnInit, Input, Directive, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Directive({ selector: '[expand]' })
export class Accordion {
  @Input() id: string;
}

@Component({
  selector: 'app-pricing-summary',
  templateUrl: './pricing-summary.component.html',
  styleUrls: ['./pricing-summary.component.css'],
  animations: [
    trigger('rowState', [
      state('inactive', style({
        backgroundColor: '#eee'
      })),
      state('active', style({
        backgroundColor: '#cf2eaa'  
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ])  ]
})
export class PricingSummaryComponent implements OnInit {
  @ViewChild(Accordion)
  set accordion(v: Accordion) {
    setTimeout(() => { this.selectedAccordion = v.id; }, 0);
  }

  selectedAccordion: string = '';
  state: string;

  constructor() {
    this.state = 'inactive';
   }

  ngOnInit() {
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
