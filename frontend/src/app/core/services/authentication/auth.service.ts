import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponseMessageModel } from '../../models/IApiResponseMessageModel';
import { IRegisterUser } from '../../models/IRegisterUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  addNewUser(user: IRegisterUser): Observable<IApiResponseMessageModel> {
    return this.http.post<IApiResponseMessageModel>(
      `${environment.baseUrl}/register`,
      user,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }
}
