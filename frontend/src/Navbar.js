import { Navbar, Nav } from 'react-bootstrap'

function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#00081C" }}>
            <Navbar.Brand href="#home">Daniel Wellington</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#Valentine'sGift">Valentine's Gift</Nav.Link>
                    <Nav.Link href="#Watches">Watches</Nav.Link>
                    <Nav.Link href="#Jewellery">Jewellery</Nav.Link>
                    <Nav.Link href="#WatchBands">Watch Bands</Nav.Link>
                    <Nav.Link href="#Collections">Collections</Nav.Link>
                    <Nav.Link href="#Shop">Shop</Nav.Link>
                    <Nav.Link href="#Instagram">Instagram</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarComponent