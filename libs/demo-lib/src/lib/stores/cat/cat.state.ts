import { State, Action, Selector, StateContext } from '@ngxs/store';
import { CatAction } from './cat.actions';

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

  @Action(CatAction)
  public add(ctx: StateContext<CatStateModel>, { payload }: CatAction) {
    const stateModel = ctx.getState();
    // stateModel.items = [...stateModel.items, payload];
    // ctx.setState(stateModel);
    ctx.setState({ items: [...stateModel.items, payload] })
  }
}
