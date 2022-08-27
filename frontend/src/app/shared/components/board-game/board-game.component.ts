import { Component, Input, OnInit } from '@angular/core';
import { IBoardGameViewModel } from 'src/app/core/models/IBoardGameViewModel';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss'],
})
export class BoardGameComponent implements OnInit {
  @Input() boardGameData!: IBoardGameViewModel;

  constructor() {}

  ngOnInit(): void {}
}
