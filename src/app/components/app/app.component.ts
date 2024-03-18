import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  apiURL = 'http://localhost:3000/books';
  books = new BehaviorSubject<Book[]>([]);
  books$ = this.books.asObservable();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.getBooks().subscribe();
    // const clicks$ = fromEvent(document, 'click');
    // const moves$ = fromEvent(document, 'mousemove');
    // clicks$
    //   .pipe(
    //     map(() => 'click'),
    //     take(1),
    //     concatWith(moves$.pipe(map(() => 'move')))
    //   )
    //   .subscribe((x) => console.log(x));
    // interval(4000)
    //   .pipe(switchMap(() => this.addBook()))
    //   .subscribe();
    // const button = document.getElementById('myButton') as HTMLButtonElement;
    // fromEvent(button, 'click')
    //   .pipe(
    //     throttleTime(2000),
    //     switchMap(() => this.addBook())
    //   )
    //   .subscribe();
  }

  addBook(): Observable<Book[]> {
    const things = [
      'Harry Potter',
      'Robinson Crusoe',
      'White Fang',
      'Tom Sawyer',
    ];
    const thing = things[Math.floor(Math.random() * things.length)];
    const book = new Book(
      Number(Math.random().toString(36).substring(2, 9)),
      thing
    );
    return this.http
      .post<Book[]>(this.apiURL, book)
      .pipe(switchMap(() => this.getBooks()));
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL).pipe(
      tap((value) => {
        this.books.next(value);
      })
    );
  }
}
