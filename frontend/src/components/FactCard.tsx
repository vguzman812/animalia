import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import FactType from '../types/factType';

const FactCard = ({ fact }: { fact: FactType }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{ maxHeight: '300px' }}>
      <Link to={`/fact/${fact._id}`}>
        <Card.Img
          src={fact.media || 'https://placehold.co/400'}
          variant='top'
          alt={fact.animal}
          className='fact-image'
        />
      </Link>

      <Card.Body>
        <span>{fact.likes ? fact.likes.length : 0} likes</span>
        <Link to={`/fact/${fact._id}`}>
          <Card.Title as='div'>
            <strong>{fact.animal}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as='p' className='text-truncate'>
        {fact.text}
      </Card.Text>
    </Card>
  );
};

export default FactCard;
