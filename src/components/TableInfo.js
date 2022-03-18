import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "animate.css";
import "../styles/TableInfo.css";
import { Table, Button } from "react-bootstrap";
import { GoDiffAdded } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { fetchRows } from "../redux/rowInfoSlice";
import Loading from "./Loading";

const TableInfo = () => {
	const dispatch = useDispatch();
	const rowStatus = useSelector((state) => state.rowInfo.status);
	const singleRowInfo = useSelector((state) => state.rowInfo.rowData.entries);
	const singleInfoRowsArr = Object.values(singleRowInfo);
	console.log("status", rowStatus);
	console.log("data from calling api", singleRowInfo);
	const paginate = (array, page_size, page_number) => {
		return array.slice((page_number - 1) * page_size, page_number * page_size);
	};

	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		if (singleInfoRowsArr.length && currentPage === 1) {
			const subArr = paginate(singleInfoRowsArr, 40, 1);
			setData(subArr);
			setCurrentPage(currentPage + 1);
		}
	}, [singleInfoRowsArr, currentPage]);

	const onChangePage = () => {
		console.log({ currentPage });
		const pagentatedArray = paginate(singleInfoRowsArr, 40, currentPage);
		setData([...data, ...pagentatedArray]);
		setCurrentPage(currentPage + 1);
	};

	const onDelete = (id) => {
		const dataFiltered = data.filter((item, index) => {
			if (index !== id) return item;
		});
		setData(dataFiltered);
	};

	const onUpdate = (updatedItem, id) => {
		console.log({ updatedItem });
		const dataFiltered = data.map((item, index) => {
			if (index === id) {
				console.log("ID");
				return updatedItem;
			}
			return item;
		});
		console.log({ dataFiltered });
		setData(dataFiltered);
	};
	useEffect(() => {
		dispatch(fetchRows());
	}, [dispatch]);

	return (
		<>
			{rowStatus === "success" ? (
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
							data.map((rowsData, index) => (
								<tr className="hide-border" key={index}>
									<td>{rowsData.API}</td>
									<td>{rowsData.Description}</td>
									<td>{rowsData.Auth}</td>
									<td>{rowsData.HTTPS}</td>
									<td>{rowsData.Cors}</td>
									<td>{rowsData.Link}</td>
									<td>{rowsData.Category}</td>
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
				<Loading />
			)}
		</>
	);
};

export default TableInfo;
