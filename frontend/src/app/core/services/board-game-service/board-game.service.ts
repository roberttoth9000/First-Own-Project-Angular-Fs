import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBoardGameViewModel } from '../../models/IBoardGameViewModel';

@Injectable({
  providedIn: 'root',
})
export class BoardGameService {
  private boardGameSubject = new BehaviorSubject<IBoardGameViewModel[]>([]);
  boardGameObservable$: Observable<IBoardGameViewModel[]> =
    this.boardGameSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllBoardGame(): void {
    this.http
      .get<IBoardGameViewModel[]>(`${environment.baseUrl}/board-games`)
      .subscribe((boardGames: IBoardGameViewModel[]) => {
        this.boardGameSubject.next(boardGames);
      });
  }
}
