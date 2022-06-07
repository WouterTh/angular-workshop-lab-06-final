import { distinctUntilChanged, map, Observable, switchMap } from 'rxjs';
import { StoreService } from 'src/app/data/store';
import { Book } from 'src/app/data/types';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book$?: Observable<Book>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.book$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')!),
      distinctUntilChanged(),
      switchMap((isbn) => this.storeService.getBookByIsbn(isbn))
    );
  }
}
