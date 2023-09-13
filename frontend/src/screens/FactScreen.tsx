import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import FactType from "../types/factType";
import { useGetOneFactQuery } from "../slices/factsApiSlice";



const FactScreen = () => {
    const { id } = useParams<{ id: string }>();

    const {
		data: singleFact,
		isLoading,
		error,
	} = useGetOneFactQuery(id!) as {
		data: FactType;
		isLoading: boolean;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		error: any;
	};

	if (isLoading) {
		return <Loader/>;
	}

	if (error) {
		return <div>{error.data?.message || error.error}</div>;
	}

	return (
		<>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={singleFact.media} alt={singleFact.animal} fluid/>
                </Col>
                <Col md={4}>
                    <p>
                        {singleFact.text}
                    </p>
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
                    </ListGroup>
                </Col>
            </Row>
		</>
	);
};

export default FactScreen;
