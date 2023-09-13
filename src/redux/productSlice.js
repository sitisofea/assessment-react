import { createSlice } from '@reduxjs/toolkit'
import item1 from "../image/item1.png";
import item2 from "../image/item2.png";
import item3 from "../image/item3.png";
import item4 from "../image/item4.png";

const initialState = [
  {
    prod_name:
      "Brilliant Blue Botanical Stainless Steel Traveler Tumbler (16oz)",
    stock: 5,
    image: item1,
  },
  {
    prod_name: "Brilliant Blue Stainless Steel Traveler Tumbler (16oz)",
    stock: 6,
    image: item2,
  },
  {
    prod_name:
      "Knockout Pink Botanical Stainless Steel Hydration Bottle (20oz)",
    stock: 2,
    image: item3,
  },
  {
    prod_name: "Knockout Pink Stainless Steel Hydration Bottle (20oz)",
    stock: 1,
    image: item4,
  },
];

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    incrementStock: (state, action) => {
      const index = state.findIndex((product) => product.prod_name === action.payload);
      state[index].stock = parseInt(state[index].stock, 10) + 1;
    },
    decrementStock: (state, action) => {
      const index = state.findIndex((product) => product.prod_name === action.payload);
      if (state[index].stock >= 1) {
        state[index].stock = parseInt(state[index].stock, 10) - 1;
      }
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.prod_name !== action.payload);
    }
  },
});

export const { addProduct, incrementStock, decrementStock, removeProduct } = productSlice.actions;

export default productSlice.reducer;