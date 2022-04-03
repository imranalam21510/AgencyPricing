

export default function MarketingandCard() {
    
    return (
      <div className="marketing_container" style={{ width: '100%', paddingTop: '' , paddingLeft:'0', paddingRight:'0'}}>
          <div className="container">
             <div className="marketing_div">
                <div data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false" data-aos="fade-down">
                    <h1 className="banner_black_text">Code / No-Code Proof of Work.</h1>
                </div>
                <div>
                    <p  className="marketing_text">Be it Effective Website Design, Well Planned and Executed Digital Marketing Strategies, or Engaging Content, our solutions are centered around delivering profitable outcomes for your business.</p>
                </div>
             </div>
             <div data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-up" className="marketing_card_div">
                <div className="card_colam1">
                    <img src="/cardimg-one.webp" alt="" />
                    <h4 className="card_title">Code</h4>
                    <p  className="card_text">We design, develop and manage pixel-perfect websites that not only look amazing but also convert visitors into leads and sales.</p>
                </div>
                <div className="card_colam">
                    <img src="/cardimg-three.webp" alt="" />
                    <h4 className="card_title">No-Code</h4>
                    <p className="card_text">We are a Full-Service Digital Marketing Agency because no online marketing strategy exists in a vacuum.</p>
                </div>
            </div>

{/* ---------philosophy div---------- */}
            <div className="marketing_div pholosophy_div">
                <div data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-down">
                    <p>PHILOSOPHY</p>
                    <h1 className="philosophy_title">We work with you, not for you.</h1>
                </div>
                <div data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-up">
                    <p  className="card_text">Be it Effective Website Design, Well Planned and Executed Digital Marketing Strategies, or Engaging Content, our solutions are centered around delivering profitable outcomes for your business.</p>
                </div>
            </div>
          </div>
      </div>
    );
  }