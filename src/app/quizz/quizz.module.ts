import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { QuizzRoutingModule } from './quizz-routing.module';
import { QuizzEffects } from './effects';
import { QuizzComponent } from './components';
import { QuizzPageComponent } from './containers';
import { quizzReducer } from './reducers/quizz.reducer';
import { StoreService } from './services/store.service';
import { ResultComponent } from './components/result/result.component';


export const COMPONENTS = [
  QuizzComponent,
  QuizzPageComponent,
  ResultComponent,
];

@NgModule({
  imports: [
    SharedModule,
    QuizzRoutingModule,
    StoreModule.forFeature('quizz', quizzReducer),
    EffectsModule.forFeature([QuizzEffects]),
  ],
  declarations: [
    COMPONENTS,
  ],
  providers: [
    StoreService,
  ]

})
export class QuizzModule {}
