import { BehaviorSubject, filter, find, map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { Book, Movie, ProductTypes } from '../types';
import { isBook, isMovie } from '../util';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  get books$(): Observable<Book[]> {
    return this._books.asObservable();
  }

  get loading$(): Observable<boolean> {
    return this._loading.asObservable();
  }

  get movies$(): Observable<Movie[]> {
    return this._movies.asObservable();
  }

  private readonly _books = new BehaviorSubject<Book[]>([]);
  private readonly _loading = new BehaviorSubject<boolean>(true);
  private readonly _movies = new BehaviorSubject<Movie[]>([]);

  add(data: ProductTypes[]): void {
    const books: Book[] = data.filter(isBook);
    const movies: Movie[] = data.filter(isMovie);

    if (books.length) {
      this._books.next(books);
    }
    if (movies.length) {
      this._movies.next(movies);
    }
    this._loading.next(!(books.length || movies.length));
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.books$.pipe(
      map(books => books.find(b => b.isbn === isbn)),
      filter(b => b !== undefined),
      map(b => b!)
    );
  }

  getMovieById(id: number): Observable<Movie> {
    return this.movies$.pipe(
      map(movies => movies.find(m => m.id === id)),
      filter(m => m !== undefined),
      map(m => m!)
    );
  }
}

