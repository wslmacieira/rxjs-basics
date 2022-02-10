import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { audit } from 'rxjs/operators';

@Component({
  selector: 'app-audit-operator',
  templateUrl: './audit-operator.component.html',
  styleUrls: ['./audit-operator.component.css'],
})
export class AuditOperatorComponent implements OnInit, OnDestroy {
  auditSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(audit(() => interval(2000)))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.auditSubscription.unsubscribe();
  }
}
