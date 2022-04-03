

export default function GoodCompany() {
    
    return (
      <div className='GoodCompany_container' style={{ width: '100%', paddingTop: '' , paddingLeft:'0', paddingRight:'0'}}>
        <div className="container">
            <div  data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-down" className="company_text_div">
                <p className="client_text">OUR CLIENTS</p>
                <div className="good_company_title_div mx-auto"><h1 className="good_company_title">You're in good company</h1></div>
                <p className="company_text">Our clients range from startups, small and large businesses. If you take <br /> your online presence seriously, you’ll fit right in.</p>
            </div>

    {/* ------------image div--------- */}
            <div  data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"  data-aos="fade-down" className="company_image_div">
                <div className="company_hide_div">
                    <img src="/btpAsset.webp" className="company_image" alt="" />
                </div>
                <div className="company_hide_div">
                    <img src="/571Asset-8logo.webp" className="company_image" alt="" />
                </div>
                <div>
                    <img src="/basic.webp" className="company_image" alt="" />
                </div>
                <div className="company_hide_div_two">
                    <img src="/riviera.webp" className="company_image" alt="" />
                </div>
                <div>
                    <img src="/Malens.webp" className="company_image" alt="" />
                </div>
                <div className="company_hide_div_two">
                    <img src="/tree.webp" className="company_image" alt="" />
                </div>

                <div className="company_hide_div company_text_image_div">
                    <img src="/Asset-2logofinal.webp" className="company_text_image" alt="" />
                </div>

                <div className="company_hide_div company_text_image_div">
                    <img src="/casinoeventplay-logo-1536x198.webp" className="company_text_image" alt="" />
                </div>

                <div className="company_hide_div">
                    <img src="/proteingodam.webp" className="company_image" alt="" />
                </div>


                <div className="company_hide_div_two">
                    <img src="/Asset-2.webp" className="company_image" alt="" />
                </div>
            </div>
        </div>
      </div>
    );
  }
  