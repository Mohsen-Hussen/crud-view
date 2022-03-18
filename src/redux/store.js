import { configureStore } from "@reduxjs/toolkit";
import rowInfoReducer from "./rowInfoSlice"

const store = configureStore({
	reducer: {
		rowInfo: rowInfoReducer,
	},
});

export default store;
