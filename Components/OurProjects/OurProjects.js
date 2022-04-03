import { FaLongArrowAltRight } from 'react-icons/fa';


export default function OurProjects() {
    
    return (
      <div className='project_container' style={{ width: '100%', paddingTop: '' , paddingLeft:'0', paddingRight:'0'}}>
          <div className="container">
            <p data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-down" className="some_work_text">SOME WORK WE'VE DONE</p>
            <h1 data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-down" className="philosophy_title">Our Projects.</h1>
            <div className="projects_card_div">
                <div className="project_card">
                  <img src="/soap.webp" className="project_img" alt="" />
                  <h5 className='project_title'>Basic Soaps</h5>
                  <p className="project_text">Web Design & Development</p>
                  <p className="view_project_btn">View Project <FaLongArrowAltRight/></p>
                </div>
                <div className="project_card">
                  <img src="/plate.webp" className="project_img" alt="" />
                  <h5 className='project_title'>Balance the Plate</h5>
                  <p className="project_text">Web Design & Development</p>
                  <p className="view_project_btn">View Project <FaLongArrowAltRight/></p>
                </div>
                <div className="project_card">
                  <img src="/education.webp" className="project_img" alt="" />
                  <h5 className='project_title'>India Education Solutions</h5>
                  <p className="project_text">Web Design & Development</p>
                  <p className="view_project_btn">View Project <FaLongArrowAltRight/></p>
                </div>
            </div> 
          </div>
      </div>
    );
  }
  