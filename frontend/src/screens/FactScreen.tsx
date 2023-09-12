import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import axios from "axios";

interface Fact {
	_id: number;
	animal: string;
	source: string;
	text: string;
	media: string;
	wiki: string;
}

const FactScreen = () => {
	console.log("Hello from FactScreen");
	const { id } = useParams();

    const [singleFact, setSingleFact] = useState<Fact>({
        _id: 0,
        animal: "",
        source: "",
        text: "",
        media: "",
        wiki: ""
      });

	useEffect(() => {
		console.log("hello from useEffect");
		const fetchFact = async () => {
			const { data } = await axios.get<Fact>(`/api/facts/${id}`);
			console.log(data);
			setSingleFact(data);
		};

		fetchFact();
	}, [id]);

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
