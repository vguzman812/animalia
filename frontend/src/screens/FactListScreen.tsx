import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
	useGetAllFactsQuery,
} from "../slices/factsApiSlice";
import { Link } from "react-router-dom";
import FactType from "../types/factType";
import { toast } from "react-toastify";

const FactListScreen = () => {
	const {
		data: facts,
		isLoading,
		error,
	} = useGetAllFactsQuery() as {
		data: FactType[];
		isLoading: boolean;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		error: any;
	};

	const deleteHandler = (id: string) => {
		console.log("delete", id);
	};

	return (
		<>
			<Row className="align-items-center">
				<Col>
					<h1>Facts</h1>
				</Col>
				<Col className="text-end">
					<Link to="/fact/create">
						<Button className="btn-sm m-3">
							<FaEdit /> Create Fact
						</Button>
					</Link>
				</Col>
			</Row>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Table
						striped
						hover
						responsive
						className="table-sm">
						<thead>
							<tr className="text-center">
								<th>ID</th>
								<th>ANIMAL</th>
								<th>SOURCE</th>
								<th>TEXT</th>
								<th>MEDIA</th>
								<th>WIKI</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{facts.map((fact) => {
								return (
									<tr key={fact._id}>
										<td>
											<Link to={`/fact/${fact._id}`}>
												{fact._id}
											</Link>
										</td>
										<td>{fact.animal}</td>
										<td>
											<Link to={fact.source}>Source</Link>
										</td>
										<td className="text-wrap">
											{fact.text}
										</td>
										{fact.media && (
											<td>
												<Link to={fact.media}>
													Media
												</Link>
											</td>
										)}
										<td>
											<Link to={fact.wiki}>
												Wikipedia
											</Link>
										</td>
										<td>
											<LinkContainer
												to={`/admin/fact/${fact._id}/edit`}>
												<Button
													variant="primary"
													className="btn-sm mx-2">
													<FaEdit />
												</Button>
											</LinkContainer>
											<Button
												variant="danger"
												className="btn-sm mx-2 my-2"
												onClick={() =>
													deleteHandler(fact._id)
												}>
												<FaTrash
													style={{ color: "white" }}
												/>
											</Button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</>
			)}
		</>
	);
};

export default FactListScreen;
