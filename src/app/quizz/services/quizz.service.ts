import { Injectable } from '@angular/core';
import { LocalStorageService } from '.';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models';


@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private localstorageService: LocalStorageService,
              private http: HttpClient) {}

  loadLevel() {
    return this.localstorageService.get('level');
  }

  loadQuestions(level: any): Observable<Question[]> {
    return this.http.get<Question[]>('http://localhost:4200/assets/questions.json');
  }

}
