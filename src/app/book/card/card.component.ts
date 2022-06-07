import { Book } from 'src/app/data/types';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent  {
  @Input()
  book?: Book;
}
