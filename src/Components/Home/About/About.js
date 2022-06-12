import facebook from "../../../assets/icons/facebook.svg";
import github from "../../../assets/icons/github.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import myImg from "../../../assets/images/myImg.png";
const About = () => {
  return (
    <div id="about" className="bg-primary">
      <div data-aos="fade-up">
        <h1 class="text-5xl text-white font-bold text-center pt-5 ">About</h1>
        <div class="divider w-1/4 mx-auto h-2 bg-white "></div>
      </div>
      <div class="hero min-h-screen  bg-primary shadow-2xl ">
        <div class="hero-content flex-col lg:flex-row w-4/5 text-white ">
          <img
            src={myImg}
            data-aos="fade-right"
            class="max-w-sm rounded-lg shadow-2xl  mr-8"
          />
          <div data-aos="fade-left">
            <h1 class="text-5xl font-bold ">Eshrat Jahan Bonna</h1>
            <p class="text-2xl font-semibold ">Fronentd Developer</p>
            <p class="py-6 ">
              I am a professional Frontend Developer. I have a strong grip on
              JavaScript, and React. I have experience In Responsive Web and
              vanilla Css and its Frame works like Bootstrap, Tailwind. I also
              have experience with Graphics design and UI design.I love to take
              on challenges and love to explore and learn new technologies.
            </p>
            {/* <div class="divider"></div> 
            <div>
              <ul>
                <li></li>
              </ul>
            </div> */}
            <div className="social flex ">
              <a
                href="https://www.linkedin.com/in/eshratjahan17/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="px-3 w-16 h-16" src={linkedin} alt="" />
              </a>
              <a
                href="https://github.com/eshratjahan17"
                target="_blank"
                rel="noreferrer"
              >
                <img className="px-3 w-16 h-16" src={github} alt="" />
              </a>
              <a
                href="https://www.facebook.com/eshratjahan17"
                target="_blank"
                rel="noreferrer"
              >
                <img className="px-3 w-16 h-16" src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
