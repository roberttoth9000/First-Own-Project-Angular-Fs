import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBoardGameViewModel } from '../../models/IBoardGameViewModel';

@Injectable({
  providedIn: 'root',
})
export class BoardGameService {
  private boardGameSubject = new BehaviorSubject<IBoardGameViewModel[]>([]);
  boardGameObservable$: Observable<IBoardGameViewModel[]> =
    this.boardGameSubject.asObservable();

  constructor(private http: HttpClient) {}
}
