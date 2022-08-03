import { Action } from "@ngrx/store";
import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, RESET, actions } from './contador.actions';


export function contadorReducer( state: number = 10, action: actions | Action  ){
  switch(action.type){

    case INCREMENTAR: return state + 1;

    case DECREMENTAR: return state - 1;

    case MULTIPLICAR: return state * 5;

    case DIVIDIR: return state / 5;

    case RESET: return state = 0;

    default: return state;
  }
}
