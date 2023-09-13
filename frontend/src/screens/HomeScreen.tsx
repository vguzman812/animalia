import { Row, Col } from "react-bootstrap";
import FactCard from "../components/FactCard";
import { useGetAllFactsQuery } from "../slices/factsApiSlice";
import FactType from "../types/factType";

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
		return <h2>Loading...</h2>;
	}

	if (error) {
		return <div>{error.data?.message || error.error}</div>;
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
