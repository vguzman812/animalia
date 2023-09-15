import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import SearchBox from "./SearchBox";

const Header = () => {
	interface RootState {
		auth: {
			userInfo: any; // Replace 'any' with the actual type of userInfo. I am too lazy for this rn.
		};
	}
	// Getting the logged-in user's info from Redux store
	const { userInfo } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			localStorage.clear();
			navigate("/login");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<header>
			<Navbar
				bg="dark"
				variant="dark"
				expand="md"
				collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Animal Facts</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<SearchBox />
							{userInfo ? (
								<NavDropdown
									title={userInfo.name}
									id="username">
									<LinkContainer to="/profile">
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<>
									<LinkContainer to="/login">
										<Nav.Link>
											<FaUser /> Login
										</Nav.Link>
									</LinkContainer>
									<LinkContainer to="/register">
										<Nav.Link>
											<FaUser /> Register
										</Nav.Link>
									</LinkContainer>
								</>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown
									title="Admin Menu"
									id="adminmenu">
									<LinkContainer to="/admin/factlist">
										<NavDropdown.Item>
											Facts
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to="/admin/userlist">
										<NavDropdown.Item>
											Users
										</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
