import { delay, map, Observable, tap } from 'rxjs';
import { APP_CONFIG, AppConfig } from 'src/app/app.config';

import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Inject, Injectable, Provider } from '@angular/core';

import { StoreService } from '../store/store.service';
import { ProductTypes } from '../types';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  static get provider(): Provider {
    function initLoadData(loadDataService: LoadDataService): () => void {
      return () => { loadDataService.loadData().subscribe(); };
    }
    return {
      provide: APP_INITIALIZER,
      useFactory: initLoadData,
      deps: [LoadDataService],
      multi: true
    };
  }

  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private readonly http: HttpClient,
    private readonly store: StoreService
  ) { }

  loadData(): Observable<void> {
    return this.http.get<ProductTypes[]>(this.appConfig.dataEndpoint).pipe(
      tap(data => this.store.add(data)),
      map(() => { })
    )
  }
}
