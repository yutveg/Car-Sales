//action type consts
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

//action creators
export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item.feature
  };
};

export const removeItem = item => {
  console.log(item);
  return {
    type: REMOVE_ITEM,
    payload: item.feature
  };
};
