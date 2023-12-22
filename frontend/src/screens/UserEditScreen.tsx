import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useGetOneUserQuery, useUpdateUserMutation } from '../slices/usersApiSlice';
import Message from '../components/Message';
import { SerializedError } from '@reduxjs/toolkit';

const UserEditScreen = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Initialize navigation and location hooks
  const navigate = useNavigate();

  // Get the userId from URL parameters
  const { id: userId } = useParams<{ id: string }>();

  // Fetching the user data for editing
  const { data: user, isLoading, refetch, error } = useGetOneUserQuery(userId);

  // Mutation for updating a user
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  // Effect to populate form fields when user data is available
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  // Function to handle form submission
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateUser({ userId, name, email, isAdmin });
      toast.success('User updated successfully');
      refetch();
      navigate('/admin/userlist');
    } catch (err) {
      toast.error((err as any)?.data?.message || (err as any)?.error);
    }
  };

  // Component rendering logic
  return (
    <>
      {/* Navigation back button */}
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>

      <FormContainer>
        <h1>Edit User</h1>
        {isUpdating && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{(error as SerializedError).message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            {/* Name input field */}
            <Form.Group controlId='name' className='my-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter new name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Email input field */}
            <Form.Group controlId='email' className='my-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='email@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* Is Admin checkbox */}
            <Form.Group controlId='text' className='my-3'>
              <Form.Check
                type='checkbox'
                label='is Administrator'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            {/* Submit Button */}
            <Button type='submit' variant='primary' className='mt-2' disabled={isLoading}>
              Update Fact
            </Button>
            {isLoading && <Loader />}
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
