import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCards = createAsyncThunk("rowInfo/fetchCards", async () => {
	const response = await axios.get("https://api.publicapis.org/entries");
	return response.data;
});

const initState = { cardData: [], status: null };
const cardInfoSlice = createSlice({
	name: "cardInfo",
	initialState: initState,
	reducers: {
		getSingleCard: (state, action) => {
			state.cardData.entries.Description = action.payload.Description;
		},
	},
	extraReducers: {
		[fetchCards.fulfilled]: (state, action) => {
			state.cardData = action.payload;
			state.status = "success";
		},
		[fetchCards.pending]: (state) => {
			state.status = "loading";
		},
		[fetchCards.rejected]: (state) => {
			state.status = "failed";
		},
	},
});

// Action creators are generated for each case reducer function
// export const { } = cardInfoSliceSlice.actions;

export default cardInfoSlice.reducer;
