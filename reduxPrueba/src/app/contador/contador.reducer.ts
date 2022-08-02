import { Action } from "@ngrx/store";


export function contadorReducer( state: number = 10, action: Action  ){
  switch(action.type){

    case 'incrementar': return state + 1;

    case 'decrementar': return state - 1;

    default: return state;
  }
}
