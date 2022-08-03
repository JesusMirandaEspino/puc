import { Action } from "@ngrx/store";

export const INCREMENTAR = '[contador] incrementar';
export const DECREMENTAR = '[contador] decrementar';
export const MULTIPLICAR = '[contador] multiplicar';
export const DIVIDIR = '[contador] dividir';
export const RESET = '[contador] reset';


export class IncrementarActions implements Action{
  readonly type = INCREMENTAR;
}

export class DecrementarActions implements Action{
  readonly type = DECREMENTAR;
}


export class MultiplicarActions implements Action{
  readonly type = MULTIPLICAR;
  constructor( public payload: number ){
    // code
  }
}


export class DividirActions implements Action{
  readonly type = DIVIDIR;
  constructor( public payload: number ){
    // code
  }
}


export class ResetActions implements Action{
  readonly type = RESET;
}



export type actions = IncrementarActions | DecrementarActions | MultiplicarActions | DividirActions | ResetActions;

