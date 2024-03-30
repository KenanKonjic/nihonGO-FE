import { Injectable } from '@angular/core';
import { Observable, of, concat, interval } from 'rxjs';
import { map, take, delay, repeat } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {
  typeEffect(word: string, speed = 50): Observable<string> {
    return interval(speed).pipe(
      map(i => word.substring(0, i + 1)),
      take(word.length)
    );
  }

  getTypingEffect(message: string): Observable<string> {
    return this.typeEffect(message);
  }

}
