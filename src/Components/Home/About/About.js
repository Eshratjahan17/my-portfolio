import facebook from "../../../assets/icons/facebook.svg";
import github from '../../../assets/icons/github.svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import myImg from '../../../assets/images/myImg.png';
const About = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200 ">
        <div class="hero-content flex-col lg:flex-row w-4/5 bg-base-200">
          <img src={myImg} class="max-w-sm rounded-lg shadow-2xl  mr-8" />
          <div>
            <h1 class="text-5xl font-bold ">Eshrat Jahan Bonna</h1>
            <h1 class="text-2xl font-semibold ">Fronentd Developer</h1>
            <p class="py-6 ">
              I am a professional Frontend Developer. I have a strong grip on
              JavaScript, and React. I also have experience with Cloud Services
              like AWS, Firebase, Heroku, etc. I have experience In Responsive
              Web and vanilla Css and its Frame works like Bootstrap, Tailwind.
              I also have experience with Graphics design and UI design.I love
              to take on challenges and love to explore and learn new
              technologies.
            </p>
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