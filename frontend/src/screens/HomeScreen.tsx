import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FactCard from "../components/FactCard";
import { useGetAllFactsQuery } from "../slices/factsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import FactType from "../types/factType";
import { Link } from "react-router-dom";
import FactsCarousel from "../components/FactsCarousel";
import Meta from "../components/Meta";

const HomeScreen = () => {
	const { pageNumber, keyword } = useParams();

	const { data, isLoading, error } = useGetAllFactsQuery({
		keyword,
		pageNumber,
	});
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
			{!keyword ? (
				<FactsCarousel />
			) : (
				<Link
					to="/"
					className="btn btn-light mb-4">
					Go Back
				</Link>
			)}
			<Meta/>
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
				keyword={keyword ? keyword : ""}
			/>
		</>
	);
};

export default HomeScreen;
