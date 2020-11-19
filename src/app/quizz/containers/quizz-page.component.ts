import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { Answer, Answering, Question, Quiz } from '../models';
import { getQuestionQueue, State } from '../reducers';
import { LocalStorageService } from '../services';
import { StoreService } from '../services/store.service';


@Component({
   template: `
    <app-header [level]="level$ | async"
    >
    </app-header>
    <bc-quizz *ngIf="!(isFinished$ | async)"
    (submitRes)="submitAnswer($event)"
    [question]="question$ | async"
    [score]="score$ | async"
    ></bc-quizz>

    <bc-result *ngIf="isFinished$ | async"
    (redirectRoute)="redirect($event)"
    [score]="score$ | async"
    [level]="level$ | async"
    ></bc-result>
  `,
})
export class QuizzPageComponent implements OnInit {
  question$: Observable<Question>;
  answerSelected$: Observable<boolean>;
  quiz$: Observable<Quiz>;
  isAnswered: Subject<string> = new Subject<string>();
  score$: Observable<number>;
  isFinished$: Observable<boolean>;
  level$: Observable<string>;

  constructor(private storeService: StoreService,
              private localStorageService: LocalStorageService) {
              }

  ngOnInit(): void {
    this.storeService.getQuiz();
    this.storeService.setLevel(localStorage.getItem('level'));
    this.question$ = this.storeService.currentQuestion;
    this.score$ = this.storeService.quizScore;
    this.isFinished$ = this.storeService.quizStatus;
    this.level$ = this.storeService.level;
  }

  submitAnswer(answer: Answering) {
    // this.isAnswered.next('success');
    // this.store.postAnswer({questionId: this.question$.id, answerIndex: $event});
    this.storeService.postAnswer(answer);
  }

  redirect(type: string) {
    if (type === 'next') {
      let previousLevel = Number(localStorage.getItem('level'));
      previousLevel += 1;
      this.localStorageService.set('level', previousLevel.toString())
      this.ngOnInit();
      this.storeService.setInitialState();
      this.storeService.setLevel(localStorage.getItem('level'));
    } else {
      this.ngOnInit();
      this.storeService.setInitialState();
    }
  }
}
