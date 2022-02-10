import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-sample-operator',
  templateUrl: './sample-operator.component.html',
  styleUrls: ['./sample-operator.component.css'],
})
export class SampleOperatorComponent implements OnInit, OnDestroy {
  sampleSubscribe: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.sampleSubscribe = interval(500)
      .pipe(sample(interval(2000)))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.sampleSubscribe.unsubscribe();
  }
}
