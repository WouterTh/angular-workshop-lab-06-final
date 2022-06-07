import { Book, Movie } from 'src/app/data/types';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Output()
  select = new EventEmitter<Movie | Book>();

  book?: Book;
  movie?: Movie;

  @Input()
  set item(value: Movie | Book | undefined) {
    this.book = undefined;
    this.movie = undefined;

    if(isBook(value)) {
      this.book = value;
    }
    if(isMovie(value)) {
      this.movie = value;
    }
  }

  onClick(item: Book | Movie): void {
    this.select.emit(item);
  }
 
}

function isBook(item?: Movie | Book): item is Book {
  return item?.type === 'book';
}

function isMovie(item?: Movie | Book): item is Movie {
  return item?.type === 'movie';
}
