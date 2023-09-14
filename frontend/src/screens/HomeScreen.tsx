import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FactCard from "../components/FactCard";
import { useGetAllFactsQuery } from "../slices/factsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import FactType from "../types/factType";
import { Link } from "react-router-dom";

const HomeScreen = () => {
	const { pageNumber, keyword } = useParams();

	const { data, isLoading, error } = useGetAllFactsQuery({ keyword, pageNumber });
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
		{ keyword && <Link to="/" className="btn btn-light mb-4">Go Back</Link>}
			<h1>Facts</h1>
			<Row>
				{data.facts.map((fact: FactType) => (
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
			<Paginate
				pages={data.pages}
				currentPage={data.page}
				keyword={keyword ? keyword : ''}
			/>
		</>
	);
};

export default HomeScreen;
