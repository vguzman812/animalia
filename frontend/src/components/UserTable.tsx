import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaTimes, FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

type UserTableProps = {
  users: {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  }[];
  deleteHandler: (id: string) => void; // Function prop for handling deletes
};
const UserTable = ({ users, deleteHandler }: UserTableProps) => {
  return (
    <Table striped hover responsive className='table-sm'>
      <thead>
        <tr className='text-left'>
          <th>ID</th>
          <th>USER</th>
          <th>EMAIL</th>
          <th>IS ADMIN</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>
                {user.isAdmin ? (
                  <FaCheck style={{ color: 'green' }} />
                ) : (
                  <FaTimes style={{ color: 'red' }} />
                )}
              </td>
              <td>
                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                  <Button variant='primary' className='btn-sm mx-2'>
                    <FaEdit />
                  </Button>
                </LinkContainer>
                <Button
                  variant='danger'
                  className='btn-sm mx-2 my-2'
                  onClick={() => deleteHandler(user._id)}
                >
                  <FaTrash style={{ color: 'white' }} />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserTable;
