import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuizzActions } from '../actions';
import { Question } from '../models';
import { getCurrentQuestions, getLevel, State } from '../reducers';

@Component({
   template: `
    <bc-quizz
    [level]="level$ | async"
    ></bc-quizz>
  `,
})
export class QuizzPageComponent implements OnInit {
  level$: Observable<string>;
  questions$: Observable<Question[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.level$ = this.store.select(getLevel);
    this.questions$ = this.store.select(getCurrentQuestions);

    this.store.dispatch(QuizzActions.loadLevel());
    this.store.dispatch(QuizzActions.loadQuestions());

  }

}
