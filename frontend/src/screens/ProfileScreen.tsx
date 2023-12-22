import { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { Link, useParams } from 'react-router-dom';
import { useDeleteFactMutation, useGetAllFactsByUserIdQuery } from '../slices/factsApiSlice';
import { FaEdit } from 'react-icons/fa';
import Message from '../components/Message';
import FactTable from '../components/FactTable';
import Paginate from '../components/Paginate';

const ProfileScreen = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Initialize Redux dispatch
  const dispatch = useDispatch();

  interface RootState {
    auth: {
      userInfo: any; // Replace 'any' with the actual type of userInfo. I am too lazy for this rn.
    };
  }
  // Getting the logged-in user's info from Redux store
  const { userInfo } = useSelector((state: RootState) => state.auth);

  // Fetching profile update state
  const [updateProfile, { isLoading: loadingUpdateProfile }] = useProfileMutation();

  // Populate the fields with current user info
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  // Function to handle form submission
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
    } else {
      try {
        // Update profile information
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();

        // Update credentials in Redux store
        dispatch(setCredentials(res));
        toast.success('Profile updated');
      } catch (err) {
        toast.error((err as any)?.data?.message || (err as any)?.error);
      }
    }
  };

  // Extract the page number from URL parameters
  const { pageNumber } = useParams();

  // Fetch all facts from the server
  const {
    data: userFacts,
    isLoading: loadingUserFacts,
    error: userFactsError,
    refetch,
  } = useGetAllFactsByUserIdQuery({ id: userInfo._id, pageNumber });
  console.log(userFacts);
  console.log(userFactsError);
  console.log(userInfo);
  // Hook to handle the delete mutation
  const [deleteFact, { isLoading: loadingDelete }] = useDeleteFactMutation();

  // Function to handle fact deletion
  const deleteHandler = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this fact?')) {
      try {
        await deleteFact(id);
        refetch(); // Refresh the data
        toast.success('Fact successfully deleted');
      } catch (err) {
        toast.error((err as any)?.data?.message || (err as any)?.error);
      }
    }
  };

  // Component rendering logic
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        <Form onSubmit={submitHandler}>
          {/* Name input */}
          <Form.Group controlId='name' className='my-2'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {/* Email input */}

          <Form.Group controlId='email' className='my-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='email@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {/* Optional password input */}

          <Form.Group controlId='password' className='my-2'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {/* Confirm password input */}

          <Form.Group controlId='confirmPassword' className='my-2'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='name'
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          {/* Submit buttom */}

          <Button type='submit' variant='primary' className='my-2'>
            Update
          </Button>
          {loadingUpdateProfile && <Loader />}
        </Form>

        {/* Currently empty Column */}
      </Col>
      <Col md={9}>
        {/* Render header and Create Fact button */}
        <Row className='align-items-center'>
          <Col>
            <h1>Facts</h1>
          </Col>
          <Col className='text-end'>
            <Link to='/fact/create'>
              <Button className='btn-sm m-3'>
                <FaEdit /> Create Fact
              </Button>
            </Link>
          </Col>
        </Row>

        {/* Render loaders or messages based on state */}
        {loadingDelete && <Loader />}
        {loadingUserFacts ? (
          <Loader />
        ) : userFactsError ? (
          <Message variant='danger'>
            {'message' in userFactsError ? userFactsError.message : 'An error occurred'}
          </Message>
        ) : (
          <>
            {/* Conditionally Render the table of facts */}
            {userFacts && userFacts.facts && (
              <FactTable facts={userFacts.facts} deleteHandler={deleteHandler} />
            )}

            {/* Conditionally Render pagination component */}
            {userFacts && userFacts.pages && userFacts.page && (
              <Paginate pages={userFacts.pages} currentPage={userFacts.page} isAdmin={true} />
            )}

            {/* Uncomment for debugging: print JSON data */}
            {/* <p>{JSON.stringify(data)}</p> */}
          </>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
