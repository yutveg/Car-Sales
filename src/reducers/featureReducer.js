import { ADD_ITEM, REMOVE_ITEM } from "../actions/buyRemove.js";

//default state
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

//reducer function to delegate add and remove item dispatching
export const featureReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        state: {
          ...state.state,
          car: {
            ...state.state.car,
            //spreads out previous features array, drops in our action.payload (the added feature) after
            features: [...state.state.car.features, action.payload]
          }
        }
      };
    case REMOVE_ITEM:
      return {
        ...state,
        state: {
          ...state.state,
          car: {
            ...state.state.car,
            //spreads out previous features array, drops in our action.payload (the added feature) after
            features: [
              ...state.state.car.features.filter(
                item => item.id !== action.payload.id
              )
            ]
          }
        }
      };
    default:
      return { state };
  }
};
