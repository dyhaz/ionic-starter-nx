export class CatAction {
  public static readonly type = '[Cat] Add item';
  constructor(public payload: string) { }
}
