import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRows = createAsyncThunk("rowInfo/fetchRows", async () => {
	const response = await axios.get("https://api.publicapis.org/entries");
	return response.data;
});

const initState = { rowData: [], status: null };
const rowInfoslice = createSlice({
	name: "rowInfo",
	initialState: initState,
	reducers: {},
	extraReducers: {
		[fetchRows.fulfilled]: (state, action) => {
			state.rowData = action.payload;
			state.status = "success";
		},
		[fetchRows.pending]: (state) => {
			state.status = "loading";
		},
		[fetchRows.rejected]: (state) => {
			state.status = "failed";
		},
	},
});

// Action creators are generated for each case reducer function
// export const { id } = rowInfosliceSlice.actions;

export default rowInfoslice.reducer;
