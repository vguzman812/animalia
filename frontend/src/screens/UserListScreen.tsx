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
    // Getting the page number from the URL parameters
    const { pageNumber } = useParams();

    // Fetching all users data, and other query-related attributes
    const { data, refetch, isLoading, error } = useGetAllUsersQuery({
        pageNumber,
    });

    // Delete user mutation and its loading state
    const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();

    // Handler to delete a user
    const deleteHandler = async (id: string) => {
        // Confirm deletion
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                // Attempt to delete the user
                await deleteUser(id);

                // Refresh the data
                refetch();

                // Show a success message
                toast.success("User successfully deleted");
            } catch (err) {
                // Show an error message
                toast.error((err as any)?.data?.message || (err as any)?.error);
            }
        }
    };

    // Component render logic
    return (
        <>
            <h1>Users</h1>

            {/* Loading state for deletion */}
            {loadingDelete && <Loader />}

            {/* Main Content */}
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">
                    {(error as any)?.data?.message}
                </Message>
            ) : (
                <>
                    {/* Display users if available */}
                    {data ? (
                        <>
                            <UserTable
                                users={data.users}
                                deleteHandler={deleteHandler}
                            />

                            {/* Pagination Component */}
                            <Paginate
                                pages={data.pages}
                                currentPage={data.page}
                                facts={false}
                                isAdmin={true}
                            />
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
