import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const navLinkStyle = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});

function NavbarComponent() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary mt-4 '>
      <Container className=' d-flex flex-row justify-content-between'>
        <Navbar.Brand href='https://www.adasi.co.id/'>
          <img
            src='https://e-administration.adasi.co.id/assets/img/LogoStar_1.png'
            width='150'
            height='auto'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className=' text-center mx-5 '>
          <Nav.Link
            as={NavLink}
            to='/guest/registrasi'
            className='mx-3'
            style={navLinkStyle}
            end>
            Registrasi Tamu
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/guest/daftartamu'
            className='mx-3'
            style={navLinkStyle}>
            Daftar Tamu
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/employee/datainoutkaryawan'
            className='mx-3'
            style={navLinkStyle}>
            Input Data NoPol Karyawan
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/employee/dataNopolKaryawan'
            className='mx-3'
            style={navLinkStyle}>
            Daftar No.POL Karyawan
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/employee/EditDataNopolKaryawan/:id'
            className='mx-3'
            style={navLinkStyle}>
            Edit Daftar No.POL Karyawan
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/employee/inoutkaryawan'
            className='mx-3'
            style={navLinkStyle}>
            IN OUT Karyawan
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
