import { distinctUntilChanged, filter, map, Observable, switchMap, tap } from 'rxjs';
import { StoreService } from 'src/app/data/store';
import { Movie } from 'src/app/data/types';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  movie$?: Observable<Movie>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.movie$ = this.route.paramMap.pipe(
      map(paramMap => parseInt(paramMap.get('id')!, 10)),
      distinctUntilChanged(),
      switchMap((id) => this.storeService.getMovieById(id))
    );
  }

}
