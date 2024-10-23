import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorite: (state, action) => {
      // Check if the product is already in the favorites array, if not, add it.
      if (!state.some((product) => product._id === action.payload._id)) {
        state.push(action.payload);
      }
    },
    // Remove from favorites
    removeFromFavorite: (state, action) => {
      return state.filter((product) => product._id !== action.payload._id);
    },
    // Set favorites
    setFavorites: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToFavorite, removeFromFavorite, setFavorites } =
  favoriteSlice.actions;

export const selectFavoriteProduct = (state) => state.favorites;

export default favoriteSlice.reducer;
