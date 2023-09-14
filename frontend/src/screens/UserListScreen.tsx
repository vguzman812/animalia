import { LinkContainer } from "react-router-bootstrap"
import { Table, Button } from "react-bootstrap"
import { FaTimes } from "react-icons/fa"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { useGetAllUsersQuery } from "../slices/usersApiSlice"
import UserTable from "../components/UserTable"

const UserListScreen = () => {
  
  const {data: users, refetch, isLoading, error} = useGetAllUsersQuery()

  const deleteHandler = () =>{
    console.log('delete')
  }

  return (
    <>
      <h1>Users</h1>
      {isLoading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <UserTable
          users={users}
          deleteHandler={deleteHandler}
        />
      )}
    </>
  )
}

export default UserListScreen