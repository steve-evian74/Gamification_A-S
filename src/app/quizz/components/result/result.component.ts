import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bc-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ResultComponent {
  @Input() level: number;
  @Input() score: number;
  @Output() redirectRoute = new EventEmitter<string>();

  redirect(type: string) {
    this.redirectRoute.emit(type);
  }

}
