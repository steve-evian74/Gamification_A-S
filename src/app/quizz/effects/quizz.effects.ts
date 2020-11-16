import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuizzActions } from '../actions';
import { LocalStorageService, QuizzService } from '../services';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class QuizzEffects {

  loadLevel$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(QuizzActions.loadLevel),
      mergeMap(() => this.quizzService.loadLevel()
      .pipe(
        map(level => QuizzActions.loadLevelSuccess({ level })),
        catchError(error => of(QuizzActions.loadLevelFailure({ error })))
        )
      )
    );
  });

  loadQuestions$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(QuizzActions.loadQuestions),
      mergeMap(() => this.quizzService.loadQuestions(this.localStorageService.get('level'))
      .pipe(
        map(questions => QuizzActions.loadQuestionsSuccess({questions})),
        catchError(error => of(QuizzActions.loadQuestionsFailure({ error })))
        )
      )
    );
  });


  constructor(
    private actions$: Actions,
    private quizzService: QuizzService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}
}
