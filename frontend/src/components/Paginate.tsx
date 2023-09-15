import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PaginateType from "../types/paginationType";

const Paginate = ({
	pages,
	currentPage,
	isAdmin = false,
	facts = true,
	keyword = "",
}: PaginateType) => {
	const pageStart = Math.max(currentPage - 2, 1);
	const pageEnd = Math.min(currentPage + 2, pages);

	return (
		<>
			{pages > 1 && (
				<Pagination size="sm">
					<LinkContainer
						to={
							!isAdmin
								? `/page/1`
								: facts
								? `/admin/factlist/page/1`
								: `/admin/userlist/page/1`
						}>
						<Pagination.First />
					</LinkContainer>
					<LinkContainer
						to={
							!isAdmin
								? `/page/${Math.max(1, currentPage - 1)}`
								: facts
								? `/admin/factlist/page/${Math.max(
										1,
										currentPage - 1
								  )}`
								: `/admin/userlist/page/${Math.max(
										1,
										currentPage - 1
								  )}`
						}>
						<Pagination.Prev />
					</LinkContainer>

					{pageStart > 1 && <Pagination.Ellipsis />}

					{[...Array(pageEnd - pageStart + 1).keys()].map((x) => {
						const actualPage = pageStart + x;
						return (
							<LinkContainer
								key={actualPage}
								to={
									!isAdmin
										? keyword
											? `/search/${keyword}/page/${actualPage}`
											: `/page/${actualPage}`
										: facts
										? `/admin/factlist/page/${actualPage}`
										: `/admin/userlist/page/${actualPage}`
								}>
								<Pagination.Item
									active={actualPage === currentPage}>
									{actualPage}
								</Pagination.Item>
							</LinkContainer>
						);
					})}

					{pageEnd < pages && <Pagination.Ellipsis />}

					<LinkContainer
						to={
							!isAdmin
								? `/page/${Math.min(pages, currentPage + 1)}`
								: facts
								? `/admin/factlist/page/${Math.min(
										pages,
										currentPage + 1
								  )}`
								: `/admin/userlist/page/${Math.min(
										pages,
										currentPage + 1
								  )}`
						}>
						<Pagination.Next />
					</LinkContainer>
					<LinkContainer
						to={
							!isAdmin
								? `/page/${pages}`
								: facts
								? `/admin/factlist/page/${pages}`
								: `/admin/userlist/page/${pages}`
						}>
						<Pagination.Last />
					</LinkContainer>
				</Pagination>
			)}
		</>
	);
};

export default Paginate;
