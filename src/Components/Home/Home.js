import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
     <About></About>
     <FeaturedProjects></FeaturedProjects>
     <Contact></Contact>
      

    </div>
  );
};

export default Home;