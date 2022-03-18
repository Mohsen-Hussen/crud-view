import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "animate.css";
import "../styles/CardInfo.css";
import { Table, Button, Card, Row, Col } from "react-bootstrap";
import { GoDiffAdded } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { fetchCards } from "../redux/cardInfoSlice";
import Loading from "./Loading";

const CardInfo = () => {
	const dispatch = useDispatch();
	const cardStatus = useSelector((state) => state.cardInfo.status);
	const singleCardInfo = useSelector(
		(state) => state.cardInfo.cardData.entries
	);
	const singleInfoCardsArr = Object.values(singleCardInfo);
	// console.log("status", cardStatus);
	// console.log("data from calling api", singleCardInfo);

	// pagenation function => that s;lice the api array
	const paginate = (array, page_size, page_number) => {
		return array.slice((page_number - 1) * page_size, page_number * page_size);
	};

	// state to track pagenatiom number
	// state to save the data we will map it
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState([]);

	// function will be fired once to get 42 card
	useEffect(() => {
		if (singleInfoCardsArr.length && currentPage === 1) {
			const subArr = paginate(singleInfoCardsArr, 42, 1);
			setData(subArr);
			setCurrentPage(currentPage + 1);
		}
	}, [singleInfoCardsArr, currentPage]);

	//function will fired when add new cards => pagenation add button
	const onChangePage = () => {
		console.log({ currentPage });
		const pagentatedArray = paginate(singleInfoCardsArr, 40, currentPage);
		setData([...data, ...pagentatedArray]);
		setCurrentPage(currentPage + 1);
		console.log(pagentatedArray);
	};

	// function will be fired when card deleted
	const onDelete = (id) => {
		const dataFiltered = data.filter((item, index) => {
			if (index !== id) return item;
		});
		setData(dataFiltered);
	};

	// function wiil fired when card updated
	const onUpdate = (updatedItem, id) => {
		console.log({ updatedItem });
		const dataUpdated = data.map((item, index) => {
			if (index === id) {
				console.log("ID");
				return updatedItem;
			}
			return item;
		});
		console.log({ dataUpdated });
		setData(dataUpdated);
	};

	//calling api
	useEffect(() => {
		dispatch(fetchCards());
	}, [dispatch]);

	return (
		<>
			<div>
				{cardStatus === "success" ? (
					<Row className="d-flex flex-wrap w-100 text-center">
						<Col xs="12">
							<div className="d-flex justify-content-center align-items-center mb-3">
								<Button
									variant="primary"
									className="d-flex justify-content-between align-items-center w-50"
									onClick={() => onChangePage()}
								>
									<span className="addBtn">Add Cards</span>
									<GoDiffAdded size={25} />
								</Button>
							</div>
						</Col>
						{data &&
							data.map((cardData, index) => (
								<Col
									xs="12"
									md="6"
									lg="4"
									key={index}
									className="d-flex justify-content-center align-items-center mb-3"
								>
									<Card className="cardContainer animate__animated animate__zoomInDown">
										<Card.Body className="d-flex justify-content-between align-items-center flex-column">
											<Card.Title>Api : {cardData.API}</Card.Title>
											<Card.Text className="maxW">
												Description : {cardData.Description}
											</Card.Text>
											<Card.Text>Auth : {cardData.Auth}</Card.Text>
											<Card.Text>HTTPS : {cardData.HTTPS.toString()}</Card.Text>
											<Card.Text>Cors : {cardData.Cors}</Card.Text>
											<Card.Text className="maxW">
												Link : {cardData.Link}
											</Card.Text>
											<Card.Text>Category : {cardData.Category}</Card.Text>
											<div className="d-flex justify-content-between align-items-center w-100">
												<Button
													variant="success"
													className="d-flex justify-content-between align-items-center w-40"
												>
													<div className="ml-2">UPDATE</div>{" "}
													<FiEdit size={19} />
												</Button>
												<Button
													variant="danger"
													className="d-flex justify-content-between align-items-center w-40"
												>
													<span>DELETE</span> <RiDeleteBin5Line size={19} />
												</Button>
											</div>
										</Card.Body>
									</Card>
								</Col>
							))}
					</Row>
				) : (
					<Loading />
				)}
			</div>
			{cardStatus === "success" ? (
				<Table
					striped
					hover
					responsive
					variant="dark"
					className="animate__animated animate__fadeInUp"
				>
					<thead>
						<tr className="hide-border">
							<th>API</th>
							<th>Description</th>
							<th>Auth</th>
							<th>HTTPS</th>
							<th>Cors</th>
							<th>Link</th>
							<th>Category</th>
							<th>Operation</th>
						</tr>
					</thead>
					<tbody className="animate__animated animate__fadeInUp animate__delay-1s">
						{data &&
							data.map((cardData, index) => (
								<tr className="hide-border" key={index}>
									<td>{cardData.API}</td>
									<td>{cardData.Description}</td>
									<td>{cardData.Auth}</td>
									<td>{cardData.HTTPS}</td>
									<td>{cardData.Cors}</td>
									<td>{cardData.Link}</td>
									<td>{cardData.Category}</td>
									<td>
										<div className="d-flex justify-content-between align-items-center">
											<Button variant="primary" onClick={() => onChangePage()}>
												<GoDiffAdded />
											</Button>
											<Button
												variant="success"
												onClick={() => {
													const newItem = {
														API: "MY UPDATED",
														Auth: "HMADA",
														Category: "Anime MOHAMED",
														Cors: "unknown",
														Description: "TEST UPDATE",
														HTTPS: false,
														Link: "https://myanimelist.net/clubs.php?cid=13727",
													};
													onUpdate(newItem, index);
												}}
											>
												<FiEdit />
											</Button>
											<Button variant="danger" onClick={() => onDelete(index)}>
												<RiDeleteBin5Line />
											</Button>
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</Table>
			) : (
				<h1>loading test</h1>
			)}
		</>
	);
};

export default CardInfo;
