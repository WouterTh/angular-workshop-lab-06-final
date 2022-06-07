import { combineLatest, map, Observable } from 'rxjs';
import { StoreService } from 'src/app/data/store';
import { Movie } from 'src/app/data/types';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies$?: Observable<Movie[]>;
  loading$?: Observable<boolean>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: StoreService
  ) {}

  ngOnInit(): void {
    this.movies$ = combineLatest([
      this.route.queryParamMap.pipe(
        map(params => params.get('maxItems') ?? '10'),
        map(maxItems => parseInt(maxItems, 10))
      ),
      this.store.movies$
    ]).pipe(
      map(([maxItems, movies]: [number, Movie[]]) => movies.slice(0, maxItems)) 
    );
    this.loading$ = this.store.loading$;
  }
}
