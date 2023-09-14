import { Button, Row, Col } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
	useGetAllFactsQuery,
} from "../slices/factsApiSlice";
import { Link } from "react-router-dom";
import FactType from "../types/factType";
import { toast } from "react-toastify";
import FactTable from "../components/FactTable";


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
					<FactTable 
					facts={facts}
					deleteHandler={deleteHandler}/>
				</>
			)}
		</>
	);
};

export default FactListScreen;
