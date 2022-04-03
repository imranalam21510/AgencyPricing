import { Col, Row } from "react-bootstrap";


export default function Footers() {
    
    return (
      <div className="footer_conainer" style={{ width: '100%', paddingTop: '' , paddingLeft:'0', paddingRight:'0'}}>
          <div className="container">
            <Row className="">
                <Col lg={4} md={12} sm={12}>
                <div className="footer_logo_div">
                    <img src="/WILogoLine.svg" className="footer_logo" alt="" />
                    <p className="">a unit of Highway Media Pvt Ltd</p>
                    <p className="footer_logo_div_text">1137 Tower B, IThum</p>
                    <p className="footer_logo_div_text">Towers,  Sector 62,</p>
                    <p className="footer_logo_div_text">Noida, UP 201301</p>
                </div>
                </Col>
                <Col lg={8} md={12} sm={12}>
                    <Row className="footer_lower_row">
                        <Col lg={3} md={6} sm={6} xs={6}>
                            <h5>Discover</h5>
                            <p className="footer_text mt-4">About us</p>
                            <p className="footer_text">Portfolio</p>
                            <p className="footer_text">Contact</p>
                            <p className="footer_text">Blog</p>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={6}>
                            <h5>Resources</h5>
                            <p className="footer_text mt-4">Free Site Audit</p>
                            <p className="footer_text">Get a Quote</p>
                            <p className="footer_text">Project Checklist</p>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={6}>
                            <h5>Services</h5>
                            <p className="footer_text mt-4">Web Design</p>
                            <p className="footer_text">Digital Marketing</p>
                            <p className="footer_text">Branding</p>
                            <p className="footer_text">Web Hosting</p>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={6}>
                        <h5>Social</h5>
                            <p className="footer_text mt-4">Facebook</p>
                            <p className="footer_text">Twitter</p>
                            <p className="footer_text">Instagram</p>
                            <p className="footer_text">LinkedIn</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
          </div>
      </div>
    );
  }