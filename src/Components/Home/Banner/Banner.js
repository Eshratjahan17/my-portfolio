
import './Banner.css';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Banner = () => {
   const particlesInit = async (main) => {
     console.log(main);

     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
     // starting from v2 you can add only the features you need reducing the bundle size
     await loadFull(main);
   };

   const particlesLoaded = (container) => {
     console.log(container);
   };

  return (
    <div className="banner-bg">
      <div class="hero min-h-screen banner  ">
        <div class="hero-overlay bg-opacity-30 bg-primary"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md text-white">
            <h1 class="mb-5 text-5xl font-bold">I'M Eshrat Jahan,</h1>
            <h2 class="mb-5 text-3xl "> A Frontend Developer</h2>

            <a href="#featuredProjects" class="btn glass  text-white outline">
              Projects
            </a>
          </div>
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Banner;