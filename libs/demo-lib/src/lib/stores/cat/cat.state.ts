import { State, Action, Selector, StateContext } from '@ngxs/store';
import { CatAction } from './cat.actions';
import RemoveCat = CatAction.RemoveCat;
import AddCat = CatAction.AddCat;

export interface CatStateModel {
  items: string[];
}

@State<CatStateModel>({
  name: 'cat',
  defaults: {
    items: []
  }
})
export class CatState {

  @Selector()
  public static getState(state: CatStateModel) {
    return state;
  }

  @Action(AddCat)
  public add(ctx: StateContext<CatStateModel>, { payload }: AddCat) {
    const stateModel = ctx.getState();
    // stateModel.items = [...stateModel.items, payload];
    // ctx.setState(stateModel);
    ctx.setState({ items: [...stateModel.items, payload] })
  }

  @Action(RemoveCat)
  public delete(ctx: StateContext<CatStateModel>, { payload }: RemoveCat) {
    const stateModel = ctx.getState();
    ctx.setState({ items: [...stateModel.items.filter(val => val !== payload)] })
  }
}
