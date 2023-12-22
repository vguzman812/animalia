import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import FactType from '../types/factType';
import { useGetOneFactQuery, useLikeFactMutation } from '../slices/factsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { toast } from 'react-toastify';
import Meta from '../components/Meta';
import fallbackImageUrl from '../assets/images/generic-animal-placeholder.webp';

const FactScreen = () => {
  // Extracting fact ID from the URL
  const { id } = useParams<{ id: string }>();
  interface RootState {
    auth: {
      userInfo: any; // Replace 'any' with the actual type of userInfo. I am too lazy for this rn.
    };
  }
  // Getting user information from the Redux store
  const { userInfo } = useSelector((state: RootState) => state.auth);
  // Fetching a single fact based on the ID
  const {
    data: singleFact,
    isLoading,
    error,
    refetch,
  } = useGetOneFactQuery(id!) as {
    data: FactType;
    isLoading: boolean;
    error: any;
    refetch: any;
  };

  // Check if the fact is liked by the logged-in user
  const isLikedByUser = userInfo
    ? singleFact?.likes?.some((likeId) => likeId.toString() === userInfo._id.toString())
    : false;

  // Like fact mutation hook
  const [likeFact, { isLoading: likesLoading }] = useLikeFactMutation();

  // Handler for liking/unliking the fact
  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!userInfo) {
      toast.error('You need to be logged in to like a fact.');
    } else {
      try {
        await likeFact(id!);
        toast.success('Fact Liked.');
        refetch();
      } catch (err) {
        toast.error((err as any)?.data?.message || (err as any)?.error);
      }
    }
  };

  // logic for generating placeholder image if fact.media does not lead to an image
  const fallbackImage = fallbackImageUrl;
  const [imgSrc, setImgSrc] = useState<string>(fallbackImage);

  useEffect(() => {
    if (singleFact?.media) {
      const loadImage = new window.Image();
      loadImage.src = singleFact.media;
      loadImage.onerror = () => {
        setImgSrc(fallbackImage);
      };
      loadImage.onload = () => {
        setImgSrc(singleFact.media!);
      };
    } else {
      setImgSrc(fallbackImage);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [singleFact]);

  // Loader display while fetching data
  if (isLoading) {
    return <Loader />;
  }

  // Error display if fetching fails
  if (error) {
    return <Message variant='danger'>{error.data?.message || error.error}</Message>;
  }

  return (
    <>
      <Meta title={singleFact.animal} description={singleFact.text} />
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={imgSrc} alt={singleFact.animal} fluid />
        </Col>
        <Col md={4}>
          <p>{singleFact.text}</p>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
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
              <a href={singleFact.media}>Media Link</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>{singleFact.likes?.length || 0} Likes</h4>
              <Button onClick={handleLike} disabled={likesLoading}>
                {likesLoading ? 'Liking...' : isLikedByUser ? 'Unlike' : 'Like'}
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default FactScreen;
