import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

import CardInfo from "./components/CardInfo";

const App = () => {
	return (
		<div className="App">
			<Container>
				<h1>CRUD VIEW APP</h1>
				<CardInfo />
			</Container>
		</div>
	);
};

export default App;
