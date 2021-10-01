import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DemoHelper {

  constructor(protected router: Router) { }

  async navigate() {
    await this.router.navigate(['/hello']);
  }
}
