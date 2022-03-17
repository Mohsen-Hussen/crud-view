import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

const App = () => {
	const cadrInfoState = useSelector((state) => state.cardInfo.cardData);
	console.log(cadrInfoState[0].id);
	return (
		<div className="App">
			<h1>CRUD VIEW APP</h1>
		</div>
	);
};

export default App;
