import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import Skills from "./Skills/Skills";



const Home = () => {
  return (
    <div >
      <Banner></Banner>
     <About></About>
     <FeaturedProjects></FeaturedProjects>
     <Skills></Skills>
     <Contact></Contact>
      

    </div>
  );
};

export default Home;