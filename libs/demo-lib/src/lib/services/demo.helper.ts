import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { CatAction } from '../stores/cat/cat.actions';
import { HttpClient } from '@angular/common/http';
import { CatState } from '../stores/cat/cat.state';

@Injectable({
  providedIn: 'root'
})
export class DemoHelper {

  constructor(
    protected router: Router,
    protected store: Store,
    protected http: HttpClient) { }

  async addCat() {
    await this.http.get('https://aws.random.cat/meow').subscribe((result: any) => {
      console.log('file', result);
      this.store.dispatch(new CatAction(result['file']));
    });
  }

  async getCats() {
    return this.store.selectSnapshot(CatState.getState);
  }

  async navigate() {
    await this.router.navigate(['/hello']);
  }
}
