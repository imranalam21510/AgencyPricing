
import Link from 'next/link'


export default function HomeBanner() {
    
  return (
    <div style={{ width: '100%', paddingTop: '80px' , paddingLeft:'0', paddingRight:'0'}}>
        <div   className="container home_banner_container">
            <h1 data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false" data-aos="fade-down"  className="banner_black_text">Digital Solutions</h1>
            <div data-aos-delay="100"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-once="false" data-aos="fade-down" className="white_text_div mx-auto"><h1 className="banner_white_text ">That Grow</h1></div>
            <h1 data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false" data-aos="fade-down" className="banner_black_text">Your Business.</h1>
                <p className="digital_text">Were the Digital Agency for you!</p>
            <div className="banner_btn_div">
                <a><Link href='#pricing' className="quote_btn" ><span className="quote_btn">Get a Quote</span></Link></a><a><Link href='#contact-us'><span  className="contact_btn">Contact Us</span></Link></a>
            </div>
            <div className="gif_div">
                <img src="/illustrations.png" className="banner_gif" alt="" />
            </div>
        </div>
    </div>
  );
}
