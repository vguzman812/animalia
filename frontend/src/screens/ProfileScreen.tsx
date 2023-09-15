import { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useProfileMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const ProfileScreen = () => {
	// State variables for form fields
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

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
	const [updateProfile, { isLoading: loadingUpdateProfile }] =
		useProfileMutation();

	// Populate the fields with current user info
	useEffect(() => {
		if (userInfo) {
			setName(userInfo.name);
			setEmail(userInfo.email);
		}
	}, [userInfo.name, userInfo.email]);

	// Function to handle form submission
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Check if passwords match
		if (password !== confirmPassword) {
			toast.error("Passwords do not match.");
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
				toast.success("Profile updated");
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
					<Form.Group
						controlId="name"
						className="my-2">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="name"
							value={name}
							onChange={(e) =>
								setName(e.target.value)
							}></Form.Control>
					</Form.Group>
					{/* Email input */}

					<Form.Group
						controlId="email"
						className="my-2">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="email@email.com"
							value={email}
							onChange={(e) =>
								setEmail(e.target.value)
							}></Form.Control>
					</Form.Group>
					{/* Optional password input */}

					<Form.Group
						controlId="password"
						className="my-2">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="password"
							onChange={(e) =>
								setPassword(e.target.value)
							}></Form.Control>
					</Form.Group>
					{/* Confirm password input */}

					<Form.Group
						controlId="confirmPassword"
						className="my-2">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="name"
							placeholder="name"
							onChange={(e) =>
								setConfirmPassword(e.target.value)
							}></Form.Control>
					</Form.Group>
					{/* Submit buttom */}

					<Button
						type="submit"
						variant="primary"
						className="my-2">
						Update
					</Button>
					{loadingUpdateProfile && <Loader />}
				</Form>

				{/* Currently empty Column */}
			</Col>
			<Col md={9}>column</Col>
		</Row>
	);
};

export default ProfileScreen;
