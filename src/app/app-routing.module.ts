import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { BufferTimerOperatorComponent } from './pages/buffer-timer-operator/buffer-timer-operator.component';
import { BufferToggleOperatorComponent } from './pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { DistinctOperatorComponent } from './pages/distinct-operator/distinct-operator.component';
import { DistinctUntilChangedOperatorComponent } from './pages/distinct-until-changed-operator/distinct-until-changed-operator.component';
import { DistinctUntilKeyChangedOperatorComponent } from './pages/distinct-until-key-changed-operator/distinct-until-key-changed-operator.component';
import { FilterOperatorComponent } from './pages/filter-operator/filter-operator.component';
import { OperatorsComponent } from './pages/operators/operators.component';
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { SkipUntilOperatorComponent } from './pages/skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from './pages/skip-while-operator/skip-while-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakeUntilOperatorComponent } from './pages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';

const routes: Routes = [
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [
      { path: 'buffer', component: BufferOperatorComponent },
      { path: 'buffercount', component: BufferCountOperatorComponent },
      { path: 'buffertimer', component: BufferTimerOperatorComponent },
      { path: 'buffertoggle', component: BufferToggleOperatorComponent },
      { path: 'bufferwhen', component: BufferWhenOperatorComponent },
      { path: 'take', component: TakeOperatorComponent },
      { path: 'takelast', component: TakeLastOperatorComponent },
      { path: 'takeuntil', component: TakeUntilOperatorComponent },
      { path: 'takewhile', component: TakeWhileOperatorComponent },
      { path: 'skip', component: SkipOperatorComponent },
      { path: 'skiplast', component: SkipLastOperatorComponent },
      { path: 'skipuntil', component: SkipUntilOperatorComponent },
      { path: 'skipwhile', component: SkipWhileOperatorComponent },
      { path: 'distinct', component: DistinctOperatorComponent },
      {
        path: 'distinctuntilchanged',
        component: DistinctUntilChangedOperatorComponent,
      },
      {
        path: 'distinctuntilkeychanged',
        component: DistinctUntilKeyChangedOperatorComponent,
      },
      { path: 'filter', component: FilterOperatorComponent },
    ],
  },
  { path: '', redirectTo: 'operators', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
