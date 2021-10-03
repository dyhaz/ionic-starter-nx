import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { CatState, CatStateModel } from './cat.state';
import { AddCat } from './cat.actions';

describe('Zoo store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([CatState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: CatStateModel = {
      items: ['item-1']
    };
    store.dispatch(new AddCat('item-1'));
    const actual = store.selectSnapshot(CatState.getState);
    expect(actual).toEqual(expected);
  });

});
