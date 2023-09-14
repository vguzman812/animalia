import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, currentPage, isAdmin = false, facts = true }) => {
	return (
		<>
			{pages > 1 && (
				<Pagination>
					{[...Array(pages).keys()].map((x) => (
						<LinkContainer
							key={x + 1}
							to={
								!isAdmin
									? `/page/${x + 1}`
									: facts
									? `/admin/factlist/page/${x + 1}`
									: `/admin/userlist/page/${x + 1}`
							}>
							<Pagination.Item active={x + 1 === currentPage}>
								{x + 1}
							</Pagination.Item>
						</LinkContainer>
					))}
				</Pagination>
			)}
		</>
	);
};

export default Paginate;
