import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn$: BehaviorSubject<boolean>;
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  private readonly baseUrl: string = `${environment.backendUrl}/user`;
  constructor (private http: HttpClient) {
    this.isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());
  }

  searchUserByUsername(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/search/${username}`);
  }

  updateUser(username: string, user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.baseUrl}/update/${username}`, user, { headers: this.getAuthHeaders() });
  }

  isLoggedIn(): boolean {
    const loggedIn = !!localStorage.getItem('auth_token');
    if (this.isLoggedIn$) {
      this.isLoggedIn$.next(loggedIn);
    }
    return loggedIn;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    if (this.isLoggedIn$) {
      this.isLoggedIn$.next(false);
    }
  }

}
