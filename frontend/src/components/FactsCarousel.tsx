import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetTopFactsQuery } from '../slices/factsApiSlice';
import fallbackImageUrl from '../assets/images/generic-animal-placeholder.webp';

const FactsCarousel = () => {
  const fallbackImage = fallbackImageUrl;
  const { data: facts, isLoading, error } = useGetTopFactsQuery();

  // State for storing image URLs
  const [imageUrls, setImageUrls] = useState({});

  const loadImage = (fact: { media: string; _id: any; }) => {
    const image = new window.Image();
    image.src = fact.media;

    image.onload = () => {
      setImageUrls((prevUrls) => ({ ...prevUrls, [fact._id]: fact.media }));
    };

    image.onerror = () => {
      setImageUrls((prevUrls) => ({ ...prevUrls, [fact._id]: fallbackImage }));
    };
  };

  useEffect(() => {
    if (Array.isArray(facts)) {
      facts.forEach((fact) => {
        if (fact.media) {
          loadImage(fact);
        } else {
          setImageUrls((prevUrls) => ({ ...prevUrls, [fact._id]: fallbackImage }));
        }
      });
    }
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [facts]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{'message' in error ? error.message : 'An error occurred'}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark mb-4' keyboard={true} touch={true}>
      {Array.isArray(facts) &&
        facts.map((fact) => (
          <Carousel.Item key={fact._id} className='carousel-container'>
            <Link to={`/fact/${fact._id}`} style={{ textDecoration: 'none' }}>
              <div className='carousel-div'>
                <Image
                  src={imageUrls[fact._id] || fallbackImage}
                  alt={fact.animal}
                  fluid
                  className='carousel-image'
                />
                <p className='carousel-text p-3'>{fact.text}</p>
              </div>
              <Carousel.Caption className=' d-flex justify-content-center align-items-center'>
                {/* <div className="bg-dark opacity-50"> */}
                <h2
                  className=''
                  style={{
                    textShadow: '3px 3px 5px rgba(0, 0, 0, 1),-1px -1px 5px rgba(0, 0, 0, 1)',
                  }}
                >
                  {fact.animal}
                </h2>
                {/* </div> */}
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default FactsCarousel;
