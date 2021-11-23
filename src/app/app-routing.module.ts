import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { OperatorsComponent } from './pages/operators/operators.component';

const routes: Routes = [
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [{ path: 'buffer', component: BufferOperatorComponent }],
  },
  { path: '', redirectTo: 'operators', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
