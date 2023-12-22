import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useCreateFactMutation } from '../slices/factsApiSlice';

// Define the CreateFactScreen component
const CreateFactScreen = () => {
  // Initialize local state variables using React hooks
  const [animal, setAnimal] = useState('');
  const [source, setSource] = useState('');
  const [text, setText] = useState('');
  const [media, setMedia] = useState('');
  const [wiki, setWiki] = useState('');

  // Hooks for navigation and route location
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  // Custom hook for creating a new fact, with its loading and error states
  const [createFact, { isLoading }] = useCreateFactMutation();

  // Function to handle form submission
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Call the createFact API with form values and unwrap the Promise
      await createFact({
        animal,
        source,
        text,
        media,
        wiki,
      }).unwrap();
      // Navigate to the home page after successful creation
      navigate('/');
    } catch (err) {
      // Show error toast if creation fails
      toast.error((err as any)?.data?.message || (err as any)?.error);
    }
  };

  // Render the component
  return (
    <FormContainer>
      <h1>Create a fact</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='animal' className='my-3'>
          <Form.Label>Animal</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter animal'
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='source' className='my-3'>
          <Form.Label>Source</Form.Label>
          <Form.Control
            type='url'
            placeholder='https://example.com'
            pattern='https://.*'
            value={source}
            onChange={(e) => setSource(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='text' className='my-3'>
          <Form.Label>Fact Description</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter your fact here: '
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='media' className='my-3'>
          <Form.Label>Media</Form.Label>
          <Form.Control
            type='url'
            placeholder='https://example.com'
            pattern='https://.*'
            value={media}
            onChange={(e) => setMedia(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='wiki' className='my-3'>
          <Form.Label>Wikipedia link</Form.Label>
          <Form.Control
            type='url'
            placeholder='https://example.com'
            pattern='https://.*'
            value={wiki}
            onChange={(e) => setWiki(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-2' disabled={isLoading}>
          Create Fact
        </Button>
        {isLoading && <Loader />}
      </Form>
      <Row className='py-3'>
        <Col>
          <Link to={redirect ? `/login?redirect=${redirect}` : '/'}>Go Back</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default CreateFactScreen;
