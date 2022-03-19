import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "animate.css";
import "../styles/CardInfo.css";
import { Button, Card, Row, Col } from "react-bootstrap";
import { GoDiffAdded } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { fetchCards } from "../redux/cardInfoSlice";
import Loading from "./Loading";

const CardInfo = () => {
	const dispatch = useDispatch();
	//get state from redux
	const cardStatus = useSelector((state) => state.cardInfo.status);
	// get entries from state
	const singleCardInfo = useSelector(
		(state) => state.cardInfo.cardData.entries
	);
	const singleInfoCardsArr = Object.values(singleCardInfo);

	// pagenation function => that s;lice the api array
	const paginate = (array, page_size, page_number) => {
		return array.slice((page_number - 1) * page_size, page_number * page_size);
	};

	// state to track pagenatiom number
	// state to save the data we will map it
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState([]);

	// function will be fired once to get 1 card
	useEffect(() => {
		if (singleInfoCardsArr.length && currentPage === 1) {
			const subArr = paginate(singleInfoCardsArr, 1, 1);
			setData(subArr);
			setCurrentPage(currentPage + 1);
		}
	}, [singleInfoCardsArr, currentPage]);

	//function will fired when add new card => pagenation add button
	const onChangePage = () => {
		console.log({ currentPage });
		const pagentatedArray = paginate(singleInfoCardsArr, 1, currentPage);
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
											<Card.Text className="maxW d-flex justify-content-between align-items-center">
												<div>Description : {cardData.Description}</div>
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
													onClick={() => {
														const newItem = {
															API: "MY UPDATED API",
															Auth: "MY UPDATED AUTH",
															Category: "MY UPDATED CATEGORY",
															Cors: "MY UPDATED CORS",
															Description: "MY UPDATED DESCRIPTION",
															HTTPS: true,
															Link: "MY UPDATED LINK",
														};
														onUpdate(newItem, index);
													}}
												>
													<span className="ml-2">UPDATE</span>
													<FiEdit size={19} />
												</Button>
												<Button
													variant="danger"
													className="d-flex justify-content-between align-items-center w-40"
													onClick={() => onDelete(index)}
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
		</>
	);
};

export default CardInfo;
