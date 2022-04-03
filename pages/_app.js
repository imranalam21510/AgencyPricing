import '../styles/globals.css';
import '../styles/Home.css';
import '../styles/Hometwo.css';
import '../styles/Extra.css';
import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
