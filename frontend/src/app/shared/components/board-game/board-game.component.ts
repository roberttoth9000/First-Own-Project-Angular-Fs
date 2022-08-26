import { Component, Input, OnInit } from '@angular/core';
import { IBoardGameViewModel } from 'src/app/core/models/IBoardGameViewModel';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss'],
})
export class BoardGameComponent implements OnInit {
  @Input() boardGameData!: IBoardGameViewModel;
  // = {
  //   id: 3,
  //   title: '7 csoda',
  //   price: 12990,
  //   type: 'kaland',
  //   exchange: 'igen',
  //   length: '2-4 óra',
  //   difficulty: 'közepes',
  //   condition: 'bontatlan',
  //   description:
  //     'Lorem ipsum galileo bikini ahol a madár se jár, vagy még az sem, de lehet mégis, mert nehogymár. A magyar könnyűzene abszolút sikerei, amelyek megkérdőjelezhetetlenek, légyszi kontaktálj velem, ha mindezek után érdekel a társas',
  //   imgUrl:
  //     'https://tarsasjatekok.com/files/common/d/d3/d39/d393f54c3de29e7984cee072b3538872/tarsas-7csodaalap-lrg.jpg',
  //   user_id: 1,
  //   player: '2-4',
  //   age: '10-99',
  //   email: 'valami@gmail.com',
  // };

  constructor() {}

  ngOnInit(): void {}
}
