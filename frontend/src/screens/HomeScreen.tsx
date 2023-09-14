import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FactCard from "../components/FactCard";
import { useGetAllFactsQuery } from "../slices/factsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {

	const {pageNumber} = useParams()

	const { data, isLoading, error } = useGetAllFactsQuery({pageNumber});
	console.log(data);

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return (
			<Message variant="danger">
				{error.data?.message || error.error}
			</Message>
		);
	}

	return (
		<>
			<h1>Facts</h1>
			<Row>
				{data.facts.map((fact) => (
					<Col
						sm={12}
						md={6}
						lg={4}
						xl={3}
						key={fact._id}>
						<FactCard fact={fact} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
