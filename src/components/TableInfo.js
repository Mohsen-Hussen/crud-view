import React from "react";
import "animate.css";
import "../styles/TableInfo.css";
import { Table, Button } from "react-bootstrap";
import { GoDiffAdded } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const TableInfo = () => {
	return (
		<>
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
					<tr className="hide-border">
						<td>Cats</td>
						<td>Pictures of cats from Tumblr</td>
						<td>apiKey</td>
						<td>true</td>
						<td>no</td>
						<td>https://docs.thecatapi.com/</td>
						<td>Animals</td>
						<td>
							<div className="d-flex justify-content-between align-items-center">
								<Button variant="primary">
									<GoDiffAdded />
								</Button>
								<Button variant="success">
									<FiEdit />
								</Button>
								<Button variant="danger">
									<RiDeleteBin5Line />
								</Button>
							</div>
						</td>
					</tr>
					<tr className="hide-border">
						<td>Cats</td>
						<td>Pictures of cats from Tumblr</td>
						<td>apiKey</td>
						<td>true</td>
						<td>no</td>
						<td>https://docs.thecatapi.com/</td>
						<td>Animals</td>
						<td>
							<div className="d-flex justify-content-between align-items-center">
								<Button variant="primary">
									<GoDiffAdded />
								</Button>
								<Button variant="success">
									<FiEdit />
								</Button>
								<Button variant="danger">
									<RiDeleteBin5Line />
								</Button>
							</div>
						</td>
					</tr>
					<tr className="hide-border">
						<td>Cats</td>
						<td>Pictures of cats from Tumblr</td>
						<td>apiKey</td>
						<td>true</td>
						<td>no</td>
						<td>https://docs.thecatapi.com/</td>
						<td>Animals</td>
						<td>
							<div className="d-flex justify-content-between align-items-center">
								<Button variant="primary">
									<GoDiffAdded />
								</Button>
								<Button variant="success">
									<FiEdit />
								</Button>
								<Button variant="danger">
									<RiDeleteBin5Line />
								</Button>
							</div>
						</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
};

export default TableInfo;
