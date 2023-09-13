import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
	const { userInfo } = useSelector((state) => state.auth);

	const logoutHandler = () => {
		console.log("logout")
	}
	return (
		<header>
			<Navbar
				bg="dark"
				variant="dark"
				expand="md"
				collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Hello World</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/cart">
								<Nav.Link>
									<FaShoppingCart /> Cart
								</Nav.Link>
							</LinkContainer>
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
								<LinkContainer to="/login">
									<Nav.Link>
										<FaUser /> Login
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
