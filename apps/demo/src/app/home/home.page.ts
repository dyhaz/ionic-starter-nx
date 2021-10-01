import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemoHelper } from '../../../../../libs/demo-lib/src/lib/services/demo.helper';

@Component({
  selector: 'ionic-starter-nx-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(

    protected demo: DemoHelper
  ) {}

  async navigate() {
    await this.demo.navigate();
  }
}
