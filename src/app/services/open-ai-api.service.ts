import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OpenAiApiService {
  private apiUrl = `${environment.backendUrl}/chat`;

  constructor(private http: HttpClient) {}

  getChatResponse(prompt: string): Observable<any> {
    console.log(prompt);
    return this.http.post(this.apiUrl, { prompt });
  }
}

