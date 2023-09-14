import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import {
	useGetOneUserQuery,
	useUpdateUserMutation,
} from "../slices/usersApiSlice";
import Message from "../components/Message";

const UserEditScreen = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const redirect = location.search ? location.search.split("=")[1] : "/";

	const { id: userId } = useParams<{ id: string }>();

	const {
		data: user,
		isLoading,
		refetch,
		error,
	} = useGetOneUserQuery(userId);
	console.log(user);

	const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

	useEffect(() => {
		console.log("hello from use Effect edit fact screen");
		if (user) {
			setName(user.name);
			setEmail(user.email);
			setIsAdmin(user.isAdmin);
		}
	}, [user]);

	const submitHandler = async (e) => {
		e.preventDefault();
        try {
            await updateUser({userId, name, email, isAdmin})
            toast.success('User updated successfully')
            refetch()
            navigate("/admin/userlist")
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
		console.log("Submit");
	};

	return (
		<>
        <Link to="/admin/userlist" className="btn btn-light my-3">Go Back</Link>
			<FormContainer>
				<h1>Edit User</h1>
				{isUpdating && <Loader />}
				{isLoading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group
							controlId="name"
							className="my-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter new name"
								value={name}
								onChange={(e) =>
									setName(e.target.value)
								}></Form.Control>
						</Form.Group>
						<Form.Group
							controlId="email"
							className="my-3">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="email@email.com"
								value={email}
								onChange={(e) =>
									setEmail(e.target.value)
								}></Form.Control>
						</Form.Group>
						<Form.Group
							controlId="text"
							className="my-3">
							<Form.Check
                            type="checkbox"
                            label="is Administrator"
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}>
                            </Form.Check>
						</Form.Group>
						
						<Button
							type="submit"
							variant="primary"
							className="mt-2"
							disabled={isLoading}>
							Update Fact
						</Button>
						{isLoading && <Loader />}
					</Form>
				)}

				<Row className="py-3">
					<Col>
						<Link
							to={redirect ? `/login?redirect=${redirect}` : "/"}>
							Go Back
						</Link>
					</Col>
				</Row>
			</FormContainer>
		</>
	);
};

export default UserEditScreen;
