import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import {
	useEditFactMutation,
	useGetOneFactQuery,
} from "../slices/factsApiSlice";
import Message from "../components/Message";

const EditFactScreen = () => {
	const [animal, setAnimal] = useState("");
	const [source, setSource] = useState("");
	const [text, setText] = useState("");
	const [media, setMedia] = useState("");
	const [wiki, setWiki] = useState("");

	const navigate = useNavigate();
	const location = useLocation();
	const redirect = location.search ? location.search.split("=")[1] : "/";

	const { id } = useParams<{ id: string }>();

	const {
		data: factInfo,
		isLoading: getFactInfoLoading,
		error: getFactInfoError,
	} = useGetOneFactQuery(id);

	const { userInfo } = useSelector((state) => state.auth);

	const [editFact, { isLoading, error }] = useEditFactMutation();

	useEffect(() => {
		console.log("hello from use Effect edit fact screen");
		if (factInfo) {
			setAnimal(factInfo.animal);
			setSource(factInfo.source);
			setText(factInfo.text);
			setMedia(factInfo.media);
			setWiki(factInfo.wiki);
		}
	}, [factInfo]);

    if (getFactInfoLoading) {
		return <Loader/>;
	}

	if (getFactInfoError) {
		return <Message variant='danger'>{ getFactInfoError.data?.message || getFactInfoError.error}</Message>;
	}

	const submitHandler = async (e) => {
		e.preventDefault();
		if (!animal || !source || !text || !media || !wiki) {
			toast.error("Please fill in all required fields.");
			return;
		}
		try {
			await editFact({
				user: userInfo._id,
				animal,
				source,
				text,
				media,
				wiki,
			}).unwrap();
			navigate("/");
		} catch (err) {
			toast.error(err?.data?.message || err.message);
		}
	};

	return (
		<FormContainer>
			<h1>Edit this fact</h1>
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
			<Row className="py-3">
				<Col>
					<Link to={redirect ? `/login?redirect=${redirect}` : "/"}>
						Go Back
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default EditFactScreen;
