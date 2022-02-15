import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  stocks: []
  
};



export const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    pushStock: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.stocks = action.payload
    },
    removeStock: (state) => {
      state.stocks = initialState.stocks;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
   
  },

});

export const { pushStock,removeStock } = stockSlice.actions;


export const selectStock = (state) => state.stocks.stocks;



export default stockSlice.reducer;
