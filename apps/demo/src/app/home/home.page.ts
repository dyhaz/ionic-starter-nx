import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoHelper } from '../../../../../libs/demo-lib/src/lib/services/demo.helper';
import { CatState, CatStateModel } from '../../../../../libs/demo-lib/src/lib/stores/cat/cat.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ionic-starter-nx-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @Select(CatState) cats$: Observable<CatStateModel> | undefined;

  public images: CatStateModel = { items: [] };

  constructor(
    protected demo: DemoHelper
  ) {}

  async ngOnInit() {
    this.images = await this.demo.getCats();

    this.cats$?.subscribe((res) => {
      this.images = res;
    });
  }

  async addRandomZoo() {
    await this.demo.addCat().then(async () => {
    });
  }

  async navigate() {
    await this.demo.navigate();
  }
}
