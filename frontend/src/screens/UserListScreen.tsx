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
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";

const UserListScreen = () => {
	const { pageNumber } = useParams();

	const { data, refetch, isLoading, error } = useGetAllUsersQuery({
		pageNumber,
	});
	const [deleteUser, { isloading: loadingDelete }] = useDeleteUserMutation();

	const deleteHandler = async (id) => {
		if (window.confirm("Are you sure you want to delete this user?")) {
			try {
				await deleteUser(id);
				refetch();
				toast.success("User successfully deleted");
			} catch (err) {
				toast.error(err?.data?.message || err.error);
			}
		}
	};

	return (
		<>
			<h1>Users</h1>
			{loadingDelete && <Loader />}
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error?.data?.message}</Message>
			) : (
				<>
					{data ? ( // Check if users are available
						<>
							<UserTable
								users={data.users}
								deleteHandler={deleteHandler}
							/>
							<Paginate
								pages={data.pages}
								currentPage={data.page}
								facts={false}
								isAdmin={true}
							/>
												<p>{JSON.stringify(data.page)}</p>

						</>
					) : (
						<Message variant="info">No users found.</Message>
					)}
				</>
			)}
		</>
	);
};

export default UserListScreen;
