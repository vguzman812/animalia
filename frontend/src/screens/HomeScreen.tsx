import { Row, Col } from "react-bootstrap";
import FactCard from "../components/FactCard";
import { useGetAllFactsQuery } from "../slices/factsApiSlice";
import FactType from "../types/factType";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
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

	if (isLoading) {
		return <Loader/>;
	}

	if (error) {
		return <Message variant='danger'>{ error.data?.message || error.error}</Message>;
	}

	return (
		<>
			<h1>Facts</h1>
			<Row>
				{facts.map((fact) => (
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
