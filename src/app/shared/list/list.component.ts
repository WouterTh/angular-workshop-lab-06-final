import { Book } from 'src/app/data/types/book';
import { Movie } from 'src/app/data/types/movie';
import { isBook, isMovie } from 'src/app/data/util';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input()
  items: (Book | Movie)[] = [];

  selected?: Book | Movie;

  constructor(private readonly router: Router) { }

  select(item: Book | Movie) {
    if (isBook(item)) {
      this.router.navigate([`/books/${item.isbn}`]);
    }
    if(isMovie(item)) {
      this.router.navigate([`/movies/${item.id}`]);
    }
  }
}
