import { configureStore } from "@reduxjs/toolkit";
import cardInfoReducer from "./cardInfoSlice"

const store = configureStore({
	reducer: {
		cardInfo: cardInfoReducer,
	},
});

export default store;
