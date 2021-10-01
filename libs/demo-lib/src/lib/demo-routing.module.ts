import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponentComponent } from './components/hello-component/hello-component.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponentComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
