import { Injectable } from '@angular/core';
import { gameInterface } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameList:gameInterface[] = [
    { id:1, name:"Assasins Creed", price:120.22 , label:"TOP-RATED" , tags:["Single Player", "PS3", "PS4", "PS5"] , cover:"assets/ac-cover.jpg" },
    { id:2, name:"BT1", price: 300.50 , label:"" , tags:["Full Game", "Cross-Plataform", "PS5"] , cover:"assets/bt-1.jpg" },
    { id:3, name:"BT4", price: 199.99, label:"GAME OF THE YEAR" , tags:["Digital Copy" ,"Cross-Plataform", "PS4"] , cover:"assets/bt-4.jpg" },
    { id:4, name:"BT5", price: 300.00, label:"" , tags:[] , cover:"assets/bt-5.jpg" },
    { id:5, name:"BTBD2", price: 89.99, label:"CLASSIC" , tags:[] , cover:"assets/bt-bad-company-2.jpg" },
    { id:6, name:"BT Hardline", price: 50, label:"FLOP" , tags:[] , cover:"assets/bt-hardline.jpg" },
  ]

  constructor() { }
}
