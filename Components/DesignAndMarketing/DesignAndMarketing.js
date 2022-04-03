import { useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { MdArrowForward, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function DesignAndMarketing() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    return (
      <div className='design_and_marketing_container' style={{ width: '100%', paddingTop: '' , paddingLeft:'0', paddingRight:'0'}}>
          <div className="container">
              <div className="design_and_marketing_div">
                <div  data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-up" >
                    <img src="/webdiesign.webp" className="design_and_marketing_img" alt="" />
                </div>
                <div data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-down"  className='design_and_marketing_text_colam'>
                    <p className='fs-6 video_text'><BsFillPlayCircleFill size={40}  className="me-4"/>Our Web Design Process</p>
                    <h1 className="design_and_marketing_title">Websites that deliver higher conversions</h1>
                    <div className='accordion_div'>
                        <div className='accordion'>
                            <p onClick={() => setShow1(!show1)} className='fs-6 accordion_title'> {show1 && <MdKeyboardArrowUp size={30} />}  {show1 || <MdKeyboardArrowDown size={30} />} Design that Coverts</p>
                            {show1 && <p className='accordion_text'>Our designs are centred around delivering more conversions. Effective design leads to more checkouts and leads.</p>} 
                        </div>
                        <div className='accordion'>
                            <p onClick={() => setShow2(!show2)} className='fs-6 accordion_title'> {show2 && <MdKeyboardArrowUp size={30} />}  {show2 || <MdKeyboardArrowDown size={30} />}Fully Responsive, Pixel Perfect</p>
                            {show2 && <p className='accordion_text'>Having a fully responsive website is an absolute must nowadays. Our websites adapt to all screen sizes elegantly.</p>} 
                        </div>
                        <div className='accordion'>
                            <p onClick={() => setShow3(!show3)} className='fs-6 accordion_title'> {show3 && <MdKeyboardArrowUp size={30} />}  {show3 || <MdKeyboardArrowDown size={30} />} Design that Coverts</p>
                            {show3 && <p className='accordion_text'>A blazing fast website is essential to your user experience. We optimise our websites to be lightweight and load fast. </p>} 
                        </div>
                    </div>
                    <button className='get_started_btn'>Get started <MdArrowForward size={22}/> </button>
                </div>
              </div>
               <div className="design_and_marketing_div digital_market_div">
                    <div data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-up"  className='design_and_marketing_text_colam'>
                        <p className='fs-6'>SEARCH ENGINE OPTIMIZATION</p>
                        <h1 className="design_and_marketing_title pe-4">Better RANKING through SEO</h1>
                        <div>
                        <p className='digital_market_text'>We use our Performance Marketing skills to deliver ROIs like you’ve never seen before. From PPC ad management to retargeting campaigns, we do it all. </p>
                        </div>
                        <button className='get_started_btn'>Get started <MdArrowForward size={22}/> </button>
                    </div>
                    <div data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-down">
                        <img src="/webdiesign.webp" className="design_and_marketing_img" alt="" />
                    </div>
              </div>
          </div>
      </div>
    );
  }