import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-timer-operator',
  templateUrl: './buffer-timer-operator.component.html',
  styleUrls: ['./buffer-timer-operator.component.css'],
})
export class BufferTimerOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(bufferTime(2000, 3000))
      .subscribe((data) => console.log(data));
  }
}
