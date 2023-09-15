import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'
import FactType from "../types/factType";


const FactCard = ({fact}: { fact: FactType }) => {
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`/fact/${fact._id}`}>
                <Card.Img src={fact.media} variant="top"/>
            </Link>

            <Card.Body>
            <span>{fact.likes ? fact.likes.length : 0} likes</span>
                <Link to={`/fact/${fact._id}`}>
                    <Card.Title as="div">
                        <strong>{fact.animal}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>

            <Card.Text as="p" className="text-truncate">
                {fact.text}
            </Card.Text>
		</Card>
	);
};

export default FactCard;
