import { Action } from "@ngrx/store";
import * as fromActions from './contador.actions';


export function contadorReducer( state: number = 10, action: fromActions.actions | Action  ){
  switch(action.type){

    case fromActions.INCREMENTAR: return state + 1;

    case fromActions.DECREMENTAR: return state - 1;

    case fromActions.MULTIPLICAR: return state * 5;

    case fromActions.DIVIDIR: return state / 5;

    case fromActions.RESET: return 0;

    default: return state;
  }
}
