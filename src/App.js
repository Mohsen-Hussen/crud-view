import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

import TableInfo from "./components/TableInfo";

const App = () => {
	const cadrInfoState = useSelector((state) => state.cardInfo.cardData);
	console.log(cadrInfoState[0].id);
	return (
		<div className="App">
			<Container>
				<Row className="d-flex justify-content-center align-items-center">
					<Col xs={12}>
						<h1>CRUD VIEW APP</h1>
						<TableInfo />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default App;
