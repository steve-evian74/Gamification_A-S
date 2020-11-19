import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StoreService } from '@app/quizz/services/store.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() level: any;

  constructor(private storeService: StoreService) { }


}
