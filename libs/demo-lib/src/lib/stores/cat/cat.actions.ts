export namespace CatAction {
  export class AddCat {
    public static readonly type = '[Cat] Add item';
    constructor(public payload: string) { }
  }

  export class RemoveCat {
    public static readonly type = '[Cat] Remove item';
    constructor(public payload: string) { }
  }
}

