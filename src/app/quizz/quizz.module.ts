import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { QuizzRoutingModule } from './quizz-routing.module';
import { LocalStorageService } from './services';
import { QuizzEffects } from './effects';
import { QuizzComponent } from './components';
import { QuizzPageComponent } from './containers';
import { quizzReducer } from './reducers/quizz.reducer';


export const COMPONENTS = [
  QuizzComponent,
  QuizzPageComponent,
];

@NgModule({
  imports: [
    SharedModule,
    QuizzRoutingModule,
    StoreModule.forFeature('quizz', quizzReducer),
    EffectsModule.forFeature([QuizzEffects]),
  ],
  declarations: [
    COMPONENTS
  ],
  providers: [
  ]

})
export class QuizzModule {}
