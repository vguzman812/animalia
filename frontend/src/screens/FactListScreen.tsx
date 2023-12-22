import { Button, Row, Col } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetAllFactsQuery, useDeleteFactMutation } from '../slices/factsApiSlice';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import FactTable from '../components/FactTable';
import Paginate from '../components/Paginate';

const FactListScreen = () => {
  // Extract the page number from URL parameters
  const { pageNumber } = useParams();

  // Fetch all facts from the server
  const { data, isLoading, refetch, error } = useGetAllFactsQuery({
    pageNumber,
  });

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

  return (
    <>
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
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {'message' in error ? error.message : 'An error occurred'}
        </Message>
      ) : (
        <>
          {/* Conditionally Render the table of facts */}
          {data && data.facts && <FactTable facts={data.facts} deleteHandler={deleteHandler} />}

          {/* Conditionally Render pagination component */}
          {data && data.pages && data.page && (
            <Paginate pages={data.pages} currentPage={data.page} isAdmin={true} />
          )}

          {/* Uncomment for debugging: print JSON data */}
          {/* <p>{JSON.stringify(data)}</p> */}
        </>
      )}
    </>
  );
};

export default FactListScreen;
