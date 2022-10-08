import { Component, OnInit } from '@angular/core';
import { gameInterface } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gameList:gameInterface[] = [];

  constructor(private games: GameService) { }

  ngOnInit(): void {
    this.gameList = this.games.gameList;
    console.log(this.gameList)
  }

}
