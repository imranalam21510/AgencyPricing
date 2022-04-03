import { FaLongArrowAltRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForward} from 'react-icons/md';
import Slider from "react-slick";
import { Row, Col } from 'react-bootstrap';

export default function SliderSection() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

    return (
      <div className='slider_container' style={{ width: '100%', paddingTop: '' , paddingLeft:'0', paddingRight:'0'}}>
          <div className="container">
            <Row className='justify-content-between container-fluid'>
                <Col  data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-down"  className="pb-4" lg={6} md={12} sm={12}>
                    <div>
                        <p className='fs-6'>TESTIMONIALS</p>
                        <h1  className="design_and_marketing_title pe-4 pb-4">What clients say about our services.</h1>
                        <button className='get_started_btn'>More Reviews <MdArrowForward size={22}/> </button>
                    </div>
                </Col>

                <Col  data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-down" lg={5} md={12} sm={12}>
                    <div>
                        <Slider {...settings}>
                            <div className='slider_slice'>
                                <img className='coma_img' src="/kutip.webp" alt="" />
                                <div className="main_slider">
                                    <p className='slider_text'>
                                        Web Impetus has always delivered on all the projects that I started with them. They have developed multiple websites for me and my experience keeps me coming back.
                                    </p>
                                </div>
                                <div className='d-flex pt-4'>
                                    <img className='slider_img' src="/gaurab.webp" alt="" />
                                    <div className="ms-3"> <h6 className='name_text'>Gaurav</h6> <p className='ceo_text'>CEO, GRT Networks</p></div>
                                </div>
                            </div>
                            <div className='slider_slice'>
                                <img className='coma_img' src="/kutip.webp" alt="" />
                                <div className="main_slider">
                                    <p className='slider_text'>
                                    It has been a relief to work with them. I can rest assured that my website is in good hands. I was very satisfied with the final results. Highly Recommended.
                                    </p>
                                </div>
                                <div className='d-flex pt-4'>
                                    <img className='slider_img' src="/sorab.webp" alt="" />
                                    <div className="ms-3"> <h6 className='name_text'>Sorabh</h6> <p className='ceo_text'>CEO, Malens Pharmaceuticals</p></div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>
            <div className="project_mind_container">
                <div className='blank_div'></div>
                <div className='project_mind_div'>
                    <div>
                        <h1  data-aos-delay="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-up" className='project_mind_text'>Have a project in mind?</h1>
                    </div>
                    <div className="banner_btn_div my-auto project_mind_div_btn">
                        <button className="quote_btn">Get a Quote</button><button className="contact_btn">Contact Us</button>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }

