import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-throttle-operator',
  templateUrl: './throttle-operator.component.html',
  styleUrls: ['./throttle-operator.component.css'],
})
export class ThrottleOperatorComponent implements OnInit, OnDestroy {
  throttleSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.throttleSubscription = interval(1000)
      .pipe(throttle(() => interval(2000), { leading: true, trailing: false }))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.throttleSubscription.unsubscribe();
  }
}
