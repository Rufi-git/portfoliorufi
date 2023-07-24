import About from '../components/About';
import Blog from '../components/Blog';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Join from '../components/Join';
import Resume from '../components/Resume';
import Service from '../components/Service';
import Works from '../components/Works';

const Home = () => {
  return (
    <div className="Home">
        <Hero/>
        <About/>
        <Service/>
        <Works/>
        <Clients/>
        <Join/>
        <Resume/>
        <Feedback/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home