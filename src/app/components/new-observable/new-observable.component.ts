import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer4 } from 'src/app/services/Obsrver4';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css'],
})
export class NewObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      for (let i = 0; i <= 5; i++) {
        // if (i === 4) {
        //   observer.error('unknow error. i value is 4');
        // }
        observer.next(i);
      }
      observer.complete();
      observer.next(1000);
    });

    let observable = {
      next: (data: number) => console.log('observer 1 ' + data),
      error: (error: string) => console.log(error),
      complete: () => console.log('complete all done'),
    };

    newObservable.subscribe(observable);

    newObservable.subscribe({
      next: (data: number) => console.log('observer 2 ' + data),
      error: (error: string) => console.log(error),
      complete: () => console.log('complete all done'),
    });

    newObservable.subscribe(
      (data) => console.log('observer 3 ' + data),
      (error) => console.log(error),
      () => console.log('complete done')
    );

    newObservable.subscribe(new Observer4())
  }
}
