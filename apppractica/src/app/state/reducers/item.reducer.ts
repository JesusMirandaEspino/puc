import { ItemModel } from '@core/models/Item.interface';
import { createReducer, on } from '@ngrx/store';
import { loadItems } from '../actions/items-actions';

// TODO Estado inicial
export const initialState: {
  loading: boolean,
  item: ReadonlyArray<ItemModel>
} = { loading: false, item: []};

export const itemReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  })
);
