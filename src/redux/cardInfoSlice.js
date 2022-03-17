import { createSlice } from "@reduxjs/toolkit";

const cardData = [
	{
		id: 1,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Supply Chain Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 2,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "HR Mangement",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 3,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Frontend Track",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 4,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Backend Track",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 5,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "JavaScript",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 6,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "React Js",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 7,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Redux",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 8,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Angular",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 9,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "Vue JS",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
	{
		id: 10,
		instractourName: "By Dr/Ahmec Selim",
		courseName: "ASP.net core",
		courseDescription: "HR-Human Rescores Management Lorem Aps Leand",
		courseDutation: "24 Hours",
	},
];

const initState = { cardData };
const cardInfoSlice = createSlice({
	name: "cardInfo",
	initialState: initState,
	reducers: {},
});

// Action creators are generated for each case reducer function
// export const { id } = cardInfoSliceSlice.actions;

export default cardInfoSlice.reducer;
