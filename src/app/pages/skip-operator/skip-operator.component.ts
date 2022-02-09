import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-skip-operator',
  templateUrl: './skip-operator.component.html',
  styleUrls: ['./skip-operator.component.css'],
})
export class SkipOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    of(1,2,3)
      .pipe(skip(2))
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
        () => console.log('complete')
      );
  }
}
