import { useState } from "react";
import { Navbar, Container, Row, Nav, NavDropdown} from "react-bootstrap";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import 'animate.css';

export default function Navbars() {
    const [toggle, setToggle] = useState(false)
    const copy = async () => {
        await navigator.clipboard.writeText("+91 9773518507");
        alert('Phone number copied');
      }
  return (
    <div style={{ width: '100%', paddingLeft:'0', paddingRight:'0'}}>
        <div className="container navbar_container">
            <Navbar collapseOnSelect expand="lg">
                <div className="pc_navBrand"><Navbar.Brand > <img src="/WILogoLine.svg" className="nav_logo" alt="" /> </Navbar.Brand></div>
                <div className="mobile_navBrand w-75"><Navbar.Brand > <img src="/WILogoLine.svg" className="nav_logo" alt="" /> </Navbar.Brand></div>
               {toggle ||  <Navbar.Toggle onClick={() => setToggle(!toggle)} aria-controls="responsive-navbar-nav" />}

                {toggle && <Navbar.Toggle onClick={() => setToggle(!toggle)} aria-controls="responsive-navbar-nav"> <GrFormClose  size={30} /></Navbar.Toggle> }

        <Navbar.Collapse id="responsive-navbar-nav">
            <div className="navlink_div mx-auto">
            </div>
            <Nav >
            <button   className="phone_btn animate__animated animate__rubberBand" onClick={copy}> <BsFillTelephoneFill className="nav_phone_icons"/> +91 8700693918</button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
        </div>
    </div>
  );
}
