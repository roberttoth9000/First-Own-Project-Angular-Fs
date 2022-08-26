import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBoardGameViewModel } from 'src/app/core/models/IBoardGameViewModel';
import { BoardGameService } from 'src/app/core/services/board-game-service/board-game.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  BoardGameSubscription!: Subscription;
  boardGames: IBoardGameViewModel[] = [];

  constructor(private boardGameService: BoardGameService) {}

  ngOnInit(): void {
    this.boardGameService.getAllBoardGame();
    this.BoardGameSubscription =
      this.boardGameService.boardGameObservable$.subscribe(
        (boardGamesFromObservable: IBoardGameViewModel[]) => {
          this.boardGames = boardGamesFromObservable;
        }
      );
  }

  ngOnDestroy(): void {
    this.BoardGameSubscription.unsubscribe();
  }
}
