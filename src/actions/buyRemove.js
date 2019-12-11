//action type consts
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

//action creators
export const addItem = name => {
  console.log(name);
  return {
    type: ADD_ITEM,
    payload: name
  };
};

export const removeItem = item => {
  return {
    type: REMOVE_ITEM
  };
};
