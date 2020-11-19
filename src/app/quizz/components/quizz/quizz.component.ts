import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Answering, Question } from '../../models';

@Component({
  selector: 'bc-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizzComponent {
  @Input() level: number;
  @Input() question: Question;
  @Input() score: number;
  @Output() submitRes = new EventEmitter<Answering>();


  submitAnswer(answer) {
    this.submitRes.emit({question: this.question, answerIndex: answer.Index});
  }
}
