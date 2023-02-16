import React, { useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  discount: 0,
  checkout: false,
  purchased_products: [],
};

const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, products) => total + products.quantity,
    0
  );
  const total = items.reduce(
    (total, products) => total + products.price * products.quantity,
    0
  );
  return { itemsCounter, total };
};

const discount_number = (item) => {
  const number_main = item.total - (item.total * 10) / 100;
  return { discount: number_main };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      if (
        !state.purchased_products.find((item) => item.id === action.payload.id)
      ) {
        state.purchased_products.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
        purchased_products: [...state.purchased_products],
      };

    case "REMOVE_ITEM":
      const delecte = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      const delete2 = state.purchased_products.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...delecte],
        ...sumItems(delecte),
        checkout: false,
        purchased_products: [...delete2],
      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
      };

    case "CHECKOUT":
      return {
        ...state,
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        discount: 0,
        checkout: true,
        purchased_products: [...state.purchased_products],
      };
    case "DISCOUNT":
      return {
        ...state,
        ...discount_number(state),
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      {console.log(state.discount)}
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
