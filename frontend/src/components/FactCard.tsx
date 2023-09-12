import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'

interface FactConfig {
    _id: number,
    animal: string,
    source: string,
    text: string,
    media: string,
    wiki: string,
}

const FactCard = ({fact}: { fact: FactConfig }) => {
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`fact/${fact._id}`}>
                <Card.Img src={fact.media} variant="top"/>
            </Link>

            <Card.Body>
                <Link to={`fact/${fact._id}`}>
                    <Card.Title as="div">
                        <strong>{fact.animal}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>

            <Card.Text as="h3">
                {fact.text}
            </Card.Text>
		</Card>
	);
};

export default FactCard;
