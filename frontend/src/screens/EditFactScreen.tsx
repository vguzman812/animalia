import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import {
	useUpdateFactMutation,
	useGetOneFactQuery,
} from "../slices/factsApiSlice";
import Message from "../components/Message";

const EditFactScreen = () => {
	// Initialize state variables for form fields
	const [animal, setAnimal] = useState("");
	const [source, setSource] = useState("");
	const [text, setText] = useState("");
	const [media, setMedia] = useState("");
	const [wiki, setWiki] = useState("");

	// Initialize React Router hooks
	const navigate = useNavigate();
	const location = useLocation();
	const redirect = location.search ? location.search.split("=")[1] : "/";
	const { id: factId } = useParams<{ id: string }>();

	// Fetch the fact to be edited
	const {
		data: fact,
		isLoading,
		refetch,
		error,
	} = factId
		? useGetOneFactQuery(factId)
		: { data: null, isLoading: false, refetch: () => {}, error: null };

	interface RootState {
		auth: {
			userInfo: any; // Replace 'any' with the actual type of userInfo. I am too lazy for this rn.
		};
	}
	// Getting the logged-in user's info from Redux store
	const { userInfo } = useSelector((state: RootState) => state.auth);

	// Hook to handle the update mutation
	const [updateFact, { isLoading: isUpdating }] = useUpdateFactMutation();

	// Update form fields with fact data when component mounts
	useEffect(() => {
		if (fact) {
			// Redirect non-owners and non-admins
			if (userInfo._id !== fact.user && !userInfo.isAdmin) {
				navigate(`/fact/${factId}`);
			}
			setAnimal(fact.animal || "");
			setSource(fact.source || "");
			setText(fact.text || "");
			setMedia(fact.media || "");
			setWiki(fact.wiki || "");
		}
	}, [fact]);

	// Handle form submission
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validation checks
		if (!animal || !source || !text || !media || !wiki) {
			toast.error("Please fill in all fields.");
			return;
		} else if (text.length < 30) {
			toast.error("Fact must be at least 30 characters long");
		} else {
			try {
				if (fact) {
					// Prepare data and attempt to update
					const updatedFact = {
						_id: factId,
						user: fact?.user,
						animal,
						source,
						text,
						media,
						wiki,
					};
					const result = (await updateFact(
						updatedFact
					).unwrap()) as any;
					if (result.error) {
						toast.error(result.error);
					} else {
						toast.success("Product updated");
						refetch();
						navigate(`/fact/${factId}`);
					}
				}
			} catch (err) {
				console.log(err);
				toast.error((err as any)?.data?.message || (err as any)?.error);
			}
		}
	};

	// Render the form and various states (loading, error, etc.)
	return (
		<>
			<FormContainer>
				<h1>Edit this fact</h1>
				{isUpdating && <Loader />}
				{isLoading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">
						{"message" in error
							? error.message
							: "An error occurred"}
					</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group
							controlId="animal"
							className="my-3">
							<Form.Label>Animal</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter animal"
								value={animal}
								onChange={(e) =>
									setAnimal(e.target.value)
								}></Form.Control>
						</Form.Group>
						<Form.Group
							controlId="source"
							className="my-3">
							<Form.Label>Source</Form.Label>
							<Form.Control
								type="url"
								placeholder="https://example.com"
								pattern="https://.*"
								value={source}
								onChange={(e) =>
									setSource(e.target.value)
								}></Form.Control>
						</Form.Group>
						<Form.Group
							controlId="text"
							className="my-3">
							<Form.Label>Fact Description</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="Enter your fact here: "
								value={text}
								onChange={(e) =>
									setText(e.target.value)
								}></Form.Control>
						</Form.Group>
						<Form.Group
							controlId="media"
							className="my-3">
							<Form.Label>Media</Form.Label>
							<Form.Control
								type="url"
								placeholder="https://example.com"
								pattern="https://.*"
								value={media}
								onChange={(e) =>
									setMedia(e.target.value)
								}></Form.Control>
						</Form.Group>
						<Form.Group
							controlId="wiki"
							className="my-3">
							<Form.Label>Wikipedia link</Form.Label>
							<Form.Control
								type="url"
								placeholder="https://example.com"
								pattern="https://.*"
								value={wiki}
								onChange={(e) =>
									setWiki(e.target.value)
								}></Form.Control>
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

export default EditFactScreen;
