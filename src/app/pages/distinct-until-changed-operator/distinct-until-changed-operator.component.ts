import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed-operator',
  templateUrl: './distinct-until-changed-operator.component.html',
  styleUrls: ['./distinct-until-changed-operator.component.css'],
})
export class DistinctUntilChangedOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // of(1, 2, 2, 1, 3)
    //   .pipe(distinctUntilChanged())
    //   .subscribe((data) => console.log(data));

    // of(1, 2, 3, 4)
    //   .pipe(
    //     distinctUntilChanged((prev, cur) => {
    //       return cur === prev + 1;
    //     })
    //   )
    //   .subscribe((data) => console.log(data));

    let employees = [
      { id: 1, name: 'Wslmacieira' },
      { id: 2, name: 'Wslmacieira' },
      { id: 3, name: 'Daniela' },
      { id: 4, name: 'Hai Wslmacieira' },
    ];

    from(employees)
      .pipe(
        distinctUntilChanged(
          (prev, cur) => {
            return prev === cur;
          },
          (k) => k.name
        )
      )
      .subscribe((data) => console.log(data));
  }
}
