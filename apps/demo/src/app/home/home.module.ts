import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DemoLibModule } from '@ionic-starter-nx/demo-lib';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, DemoLibModule],
  declarations: [HomePage],
})
export class HomePageModule {}
