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
	// Extracting query parameters
	const { pageNumber, keyword } = useParams();

	// Fetching facts using a custom query hook
	const { data, isLoading, error } = useGetAllFactsQuery({
		keyword,
		pageNumber,
	});

	// Display a loader when data is being fetched
	if (isLoading) {
		return <Loader />;
	}
	// Display error message if fetching fails I AM TOO LAZY FOR THIS!
	if (error) {
		if ("data" in error) {
			return (
				<Message variant="danger">
					{(error.data as any)?.message}
				</Message>
			);
		} else {
			return (
				<Message variant="danger">
					{(error as any).message || "Unknown error"}
				</Message>
			);
		}
	}

	return (
		<>
			{/* Display carousel if no keyword is specified, otherwise show "Go Back" button */}
			{!keyword ? (
				<FactsCarousel />
			) : (
				<Link
					to="/"
					className="btn btn-light mb-4">
					Go Back
				</Link>
			)}
			<Meta />
			<h1>Facts</h1>
			<Row>
				{/* Loop through facts and display each one in a card */}
				{data &&
					data.facts &&
					data.facts.map((fact: FactType) => (
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
			{/* Pagination component */}
			{data && (
				<Paginate
					pages={data.pages}
					currentPage={data.page}
					keyword={keyword ? keyword : ""}
				/>
			)}
		</>
	);
};

export default HomeScreen;
