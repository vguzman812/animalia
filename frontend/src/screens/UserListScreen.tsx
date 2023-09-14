import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
	useGetAllUsersQuery,
	useDeleteUserMutation,
} from "../slices/usersApiSlice";
import UserTable from "../components/UserTable";
import { toast } from "react-toastify";

const UserListScreen = () => {
	const { data: users, refetch, isLoading, error } = useGetAllUsersQuery();
	console.log(error)
	const [deleteUser, { isloading: loadingDelete }] = useDeleteUserMutation();

	const deleteHandler = async (id) => {
		if (window.confirm("Are you sure you want to delete this user?")){
      try {
        await deleteUser(id)
        refetch();
        toast.success("User successfully deleted")
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
	};

	return (
		<>
			<h1>Users</h1>
      {loadingDelete && <Loader/>}
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error?.data?.message}</Message>
			) : (
				<UserTable
					users={users}
					deleteHandler={deleteHandler}
				/>
			)}
		</>
	);
};

export default UserListScreen;
