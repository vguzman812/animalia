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
		<Message variant="danger">{error}</Message>
	) : (
		<Carousel
			pause="hover"
			className="bg-dark mb-4">
			{facts.map((fact) => (
				<Carousel.Item key={fact._id}>
					<Link to={`/fact/${fact._id}`}>
						<Image
							src={fact.media}
							alt={fact.animal}
							fluid
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
