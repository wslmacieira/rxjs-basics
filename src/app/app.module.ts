import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { FunctionObservableComponent } from './components/function-observable/function-observable.component';
import { CancellingObservableComponent } from './components/cancelling-observable/cancelling-observable.component';
import { OperatorsBasicsComponent } from './components/operators-basics/operators-basics.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { OperatorsComponent } from './pages/operators/operators.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimerOperatorComponent } from './pages/buffer-timer-operator/buffer-timer-operator.component';
import { BufferToggleOperatorComponent } from './pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeUntilOperatorComponent } from './pages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    FunctionObservableComponent,
    CancellingObservableComponent,
    OperatorsBasicsComponent,
    BufferOperatorComponent,
    OperatorsComponent,
    BufferCountOperatorComponent,
    BufferTimerOperatorComponent,
    BufferToggleOperatorComponent,
    BufferWhenOperatorComponent,
    TakeOperatorComponent,
    TakeLastOperatorComponent,
    TakeUntilOperatorComponent,
    TakeWhileOperatorComponent,
    SkipOperatorComponent,
    SkipLastOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
