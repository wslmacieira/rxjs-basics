import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-key-changed-operator',
  templateUrl: './distinct-until-key-changed-operator.component.html',
  styleUrls: ['./distinct-until-key-changed-operator.component.css'],
})
export class DistinctUntilKeyChangedOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let employees = [
      { id: 1, name: 'Wslmacieira' },
      { id: 2, name: 'Wslmacieira2' },
      { id: 2, name: 'Wslmacieira2' },
      { id: 3, name: 'Daniela' },
      { id: 3, name: 'Daniela' },
      { id: 4, name: 'Wslmacieira4' },
    ];

    // from(employees)
    //   .pipe(distinctUntilKeyChanged('name'))
    //   .subscribe((data) => console.log(data));

    from(employees)
      .pipe(
        distinctUntilKeyChanged('name', (prev, cur) => {
          return prev.substr(0, 4) === cur.substr(0, 4);
        })
      )
      .subscribe((data) => console.log(data));
  }
}
