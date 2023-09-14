import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import FactType from "../types/factType";
import {
	useGetOneFactQuery,
	useLikeFactMutation,
} from "../slices/factsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { toast } from "react-toastify";
import Meta from "../components/Meta";

const FactScreen = () => {
	const { id } = useParams<{ id: string }>();
	const { userInfo } = useSelector((state) => state.auth);

	const {
		data: singleFact,
		isLoading,
		error,
		refetch,
	} = useGetOneFactQuery(id!) as {
		data: FactType;
		isLoading: boolean;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		error: any;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		refetch: any;
	};

	const isLikedByUser = singleFact?.likes?.some(
		(likeId) => likeId.toString() === userInfo._id.toString()
	);

	const [likeFact, { isLoading: likesLoading }] = useLikeFactMutation();

	const handleLike = async (e) => {
		e.preventDefault();
		try {
			await likeFact(id);
			toast.success("Fact Liked.");
			refetch();
		} catch (err) {
			toast.error(err?.data?.message || err.error);
		}
	};

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
		<Meta title={singleFact.animal} description={singleFact.text}/>
			<Link
				className="btn btn-light my-3"
				to="/">
				Go Back
			</Link>
			<Row>
				<Col md={5}>
					<Image
						src={singleFact.media}
						alt={singleFact.animal}
						fluid
					/>
				</Col>
				<Col md={4}>
					<p>{singleFact.text}</p>
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{singleFact.animal}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<a href={singleFact.source}>Source</a>
						</ListGroup.Item>
						<ListGroup.Item>
							<a href={singleFact.wiki}>Wikipedia Link</a>
						</ListGroup.Item>
						<ListGroup.Item>
							<h4>{singleFact.likes?.length || 0} Likes</h4>
							<Button
								onClick={handleLike}
								disabled={likesLoading}>
								{likesLoading
									? "Liking..."
									: isLikedByUser
									? "Unlike"
									: "Like"}
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</>
	);
};

export default FactScreen;
