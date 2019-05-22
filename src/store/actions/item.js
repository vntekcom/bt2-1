import { ADD_ITEM, SUB_ITEM } from "../contants/item";

//action creator
export const addItem = newItem => {
  return {
    type: ADD_ITEM,
    payload: {newItem, qty:1}
  };
};

export const subItem = newItem => {
  return {
    type: SUB_ITEM,
    payload: {newItem, qty:1}
  };
};