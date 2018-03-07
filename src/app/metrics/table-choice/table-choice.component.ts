import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-choice',
  templateUrl: './table-choice.component.html',
  styleUrls: ['./table-choice.component.css']
})
export class TableChoiceComponent implements OnInit {

  @Input() choice;
  constructor() { }

  ngOnInit() {
    console.log("choice is " + this.choice);
  }

}
