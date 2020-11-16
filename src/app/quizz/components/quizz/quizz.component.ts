import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  @Input() level: number;

} 
