import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useGetTopFactsQuery } from "../slices/factsApiSlice";

const FactsCarousel = () => {
	const { data: facts, isLoading, error } = useGetTopFactsQuery();

	return isLoading ? (
		<Loader />
	) : error ? (
		<Message variant="danger">
			{"message" in error ? error.message : "An error occurred"}
		</Message>
	) : (
		<Carousel
			pause="hover"
			className="bg-dark mb-4">
			{Array.isArray(facts) && facts.map((fact) => (
				<Carousel.Item key={fact._id} className="carousel-container">
					<Link to={`/fact/${fact._id}`}>
						<Image
							src={fact.media}
							alt={fact.animal}
							fluid
							className="carousel-image"
						/>
						<Carousel.Caption>
							<h2>{fact.animal}</h2>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default FactsCarousel;
