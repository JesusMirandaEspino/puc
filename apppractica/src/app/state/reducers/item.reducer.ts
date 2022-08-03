import { ItemModel } from '@core/models/Item.interface';
import { ItemState } from '@core/models/item.state';
import { createReducer, on } from '@ngrx/store';
import { loadItems } from '../actions/items-actions';

// TODO Estado inicial
export const initialState: ItemState = { loading: false, item: []};

export const itemReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  })
);
