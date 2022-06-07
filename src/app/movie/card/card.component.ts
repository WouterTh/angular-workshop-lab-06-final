import { Movie } from 'src/app/data/types';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input()
  movie?: Movie;
}
