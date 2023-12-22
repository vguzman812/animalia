import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  // Initializing state for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Hooks for navigation and location
  const navigate = useNavigate();
  const { search } = useLocation();

  // Fetching login state
  const [login, { isLoading }] = useLoginMutation();

  interface RootState {
    auth: {
      userInfo: any; // Replace 'any' with the actual type of userInfo. I am too lazy for this rn.
    };
  }
  // Getting the logged-in user's info from Redux store
  const { userInfo } = useSelector((state: RootState) => state.auth);

  // Get redirect URL from query string
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  // Redirect if user is already logged in
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  // Function to handle form submission
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Attempt to login
      const res = await login({ email, password }).unwrap();

      // Update credentials in Redux store
      dispatch(setCredentials({ ...res }));

      // Navigate to redirect URL
      navigate(redirect);
    } catch (err) {
      // Show error toast if login fails. Too lazy to fix rn.
      toast.error((err as any)?.data?.message || (err as any)?.error);
    }
  };

  // Component rendering logic
  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-2' disabled={isLoading}>
          Sign In
        </Button>
        {isLoading && <Loader />}
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
