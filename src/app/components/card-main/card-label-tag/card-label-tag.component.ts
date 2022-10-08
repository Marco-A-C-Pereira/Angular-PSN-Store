import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label-tag',
  templateUrl: './card-label-tag.component.html',
  styleUrls: ['./card-label-tag.component.css']
})
export class CardLabelTagComponent implements OnInit {

  @Input()label:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
