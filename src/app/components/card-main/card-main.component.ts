import { Component, Input, OnInit } from '@angular/core';
import { gameInterface } from 'src/app/models/game';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit {

  @Input()game:gameInterface = {
    id:10,
    name:"",
    price:0,
    label:"",
    tags:[""],
    cover:""
  };

  gameTest:gameInterface ={
    id:1,
    name:"BT-1",
    price:555.99,
    label:"Exclusive",
    tags:["PS5, PS4"],
    cover:"assets/bt-1.jpg"
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.game)
  }

}
