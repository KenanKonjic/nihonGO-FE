import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  private readonly baseUrl: string = `${environment.backendUrl}/user`;
  constructor (private http: HttpClient) { }

  searchUserByUsername(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/search/${username}`);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

}
