import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponentComponent } from './components/hello-component/hello-component.component';
import { IonicModule } from '@ionic/angular';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [
    HelloComponentComponent,
  ],
  imports: [DemoRoutingModule, CommonModule, IonicModule],
  exports: [],
})
export class DemoLibModule {}
