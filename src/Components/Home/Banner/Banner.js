
import './Banner.css';

const Banner = () => {

  return (
    <div className="banner-bg">
     
      <div class="hero min-h-screen banner  ">
        <div class="hero-overlay bg-opacity-30 bg-primary">
          
        </div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md text-white">
            <h1 class="mb-5 text-5xl font-bold">I'M Eshrat Jahan,</h1>
            <h2 class="mb-5 text-3xl "> A Frontend Developer</h2>

            <button class="btn glass  text-white outline">Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;