import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while-operator',
  templateUrl: './take-while-operator.component.html',
  styleUrls: ['./take-while-operator.component.css']
})
export class TakeWhileOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500).pipe(takeWhile(x => x < 5)).subscribe((data) => {
      console.log(data);
    },
    error => {
      console.log(error)
    },
    () => {
      console.log('complete take while')
    })
  }

}
