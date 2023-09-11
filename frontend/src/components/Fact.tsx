import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'

interface FactConfig {
    _id: number,
    media?: string,
    fact: string,
    animal: string
}

const Fact = ({fact}: { fact: FactConfig }) => {
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`fact/${fact._id}`}>
                <Card.Img src={fact.media || "https://placehold.co/400"} variant="top"/>
            </Link>

            <Card.Body>
                <Link to={`fact/${fact._id}`}>
                    <Card.Title as="div">
                        <strong>{fact.animal}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>

            <Card.Text as="h3">
                {fact.fact}
            </Card.Text>
		</Card>
	);
};

export default Fact;
