import { Button, Row, Col } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
	useGetAllFactsQuery,
	useDeleteFactMutation,
} from "../slices/factsApiSlice";
import { Link, useParams } from "react-router-dom";
import FactType from "../types/factType";
import { toast } from "react-toastify";
import FactTable from "../components/FactTable";
import Paginate from "../components/Paginate";
import { useSelector } from "react-redux";

const FactListScreen = () => {
	const { pageNumber } = useParams();
	const { data, isLoading, refetch, error } = useGetAllFactsQuery({
		pageNumber,
	});
	const [deleteFact, { isLoading: loadingDelete }] = useDeleteFactMutation();

	const deleteHandler = async (id: string) => {
		if (window.confirm("Are you sure you want to delete this fact?")) {
			try {
				await deleteFact(id);
				refetch();
				toast.success("Fact successfully deleted");
			} catch (err) {
				toast.error(err?.data?.message || err.error);
			}
		}
	};

	return (
		<>
			<Row className="align-items-center">
				<Col>
					<h1>Facts</h1>
				</Col>
				<Col className="text-end">
					<Link to="/fact/create">
						<Button className="btn-sm m-3">
							<FaEdit /> Create Fact
						</Button>
					</Link>
				</Col>
			</Row>

			{loadingDelete && <Loader />}
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<FactTable
						facts={data.facts}
						deleteHandler={deleteHandler}
					/>
					<Paginate
						pages={data.pages}
						currentPage={data.page}
					/>
				</>
			)}
		</>
	);
};

export default FactListScreen;
