import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  ticker: "MSFT"
  
};



export const tickerSlice = createSlice({
  name: 'ticker',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    pushTicker: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.ticker = action.payload
    },
    removeTicker: (state) => {
      state.ticker = "MSFT"
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
   
  },

});

export const { pushTicker,removeTicker} = tickerSlice.actions;


export const selectTicker = (state) => state.ticker.ticker;



export default tickerSlice.reducer;
