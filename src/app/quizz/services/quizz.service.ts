import { Injectable } from '@angular/core';
import { LocalStorageService } from '.';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answering, Quiz } from '../models';


@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private localstorageService: LocalStorageService,
              private http: HttpClient) {}

  loadLevel() {
    return this.localstorageService.get('level');
  }

  getQuiz(): Observable<Quiz> {
    let level = localStorage.getItem('level');
    if (level === null) {
      level = '1';
      localStorage.setItem('level', '1');
    }
    return this.http.get<Quiz>(`http://localhost:4200/assets/questions-level-${level}.json`)
  }

  updateScore(data) {
    if (data.payload.answerIndex === data.payload.question.correctIndex) {
      return 1;
    } else {
      return 0;
    }
  }


}
