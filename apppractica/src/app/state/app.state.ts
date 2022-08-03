import { ItemModel } from "@core/models/Item.interface";
import { ItemState } from "@core/models/item.state";
import {  ActionReducerMap } from "@ngrx/store";
import { itemReducer } from "./reducers/item.reducer";


export interface AppState {
  item:ItemState
  //ReadonlyArray<ItemModel>;
  //shopingCard: ReadonlyArray<string>;
}


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  item: itemReducer
}
