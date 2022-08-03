import { ItemModel } from "./Item.interface";

export interface ItemState {
  loading: boolean,
  item: ReadonlyArray<ItemModel>
}
