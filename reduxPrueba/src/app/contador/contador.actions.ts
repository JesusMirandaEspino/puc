import { Action } from "@ngrx/store";

export const INCREMENTAR = '[contador] incrementar';
export const DECREMENTAR = '[contador] decrementar';


export class IncrementarActions implements Action{
  readonly type = INCREMENTAR;
}

export class DecrementarActions implements Action{
  readonly type = DECREMENTAR;
}
