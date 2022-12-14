import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label-pricing',
  templateUrl: './card-label-pricing.component.html',
  styleUrls: ['./card-label-pricing.component.css']
})
export class CardLabelPricingComponent implements OnInit {

  @Input()gamePrice:number = 0;
  @Input()gameTags:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
