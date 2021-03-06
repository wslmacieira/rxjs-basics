import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { funcObservable, functionObs } from './services/Function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'rxjs-basics';

  postsArray = [
    { title: 'title1', description: 'description1'},
    { title: 'title2', description: 'description2'},
    { title: 'title3', description: 'description3'},
  ];

  // postsArrayObservable$ = from(this.postsArray);

  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Resolve the promise. sending data')
  //     console.log('Resolve the promise. sending data')
  //   }, 3000)
  // })

  constructor() {
    // this.postsArrayObservable$.subscribe({
    //   next: data => console.log(data),
    //   error: error => console.log(error),
    //   complete: () => console.log("complete done!")
    // });

    // this.postsArrayObservable$.subscribe({
    //   next: data => console.log(data),
    //   error: error => console.log(error),
    //   complete: () => console.log("complete done! promise done")
    // });
    // console.log('before function');
    // console.log(functionObs());
    // console.log('after function');

    // console.log('before observable');
    // funcObservable.subscribe((data) => {
    //   console.log(data);
    // });
    // console.log('after observable');
  }

  ngAfterViewInit(): void {
    // fromEvent(document.getElementById('click-button')!, 'click').subscribe({
    //   next: data => console.log(data),
    //   error: error => console.log(error),
    //   complete: () => console.log("complete done! promise done")
    // })
  }
}
