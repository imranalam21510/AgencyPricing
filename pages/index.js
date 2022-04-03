import PriceCalculator from "../Components/PriceCalculator/PriceCalculator";
import Navbars from '../Components/Navbars/Navbars'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import BasicImages from '../Components/BasicImage/BasicImages'
import MarketingandCard from "../Components/MarketingandCard/MarketingandCard";
import Footers from "../Components/Footer/Footer";
import DesignAndMarketing from '../Components/DesignAndMarketing/DesignAndMarketing';
import OurProjects from '../Components/OurProjects/OurProjects'
import GoodCompany from "../Components/GoodCompany/GoodCompany";
import SliderSection from '../Components/SliderSection/SliderSection'
import ContactUs from '../Components/ContactUs/ContactUs'
export default function Home() {

  return (
    <main className="full_container">
      <section  className="mains">
          <Navbars />
         <HomeBanner/>
       </section>
       <section>
         <BasicImages/>
       </section>
       <section>
         <MarketingandCard/>
       </section>
       <section>
         <DesignAndMarketing />
       </section>
       <section>
         <OurProjects/>
       </section>
      <section>
        <PriceCalculator/>
      </section>
      <section>
        <ContactUs/>
      </section>
       <section>
         <GoodCompany/>
       </section>
       <section>
         <SliderSection/>
       </section>
       <footer>
        <Footers/>
       </footer>
    </main>
  )
}
