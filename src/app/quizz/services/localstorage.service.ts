import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    get(key: string): Observable<string> {
        if (localStorage.getItem(key) == null) {
          this.set('level', '1');
        }
        return of(localStorage.getItem(key));
      }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}
