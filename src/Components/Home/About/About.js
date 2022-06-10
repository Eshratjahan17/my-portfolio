
const About = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-secondary ">
        <div class="hero-content flex-col lg:flex-row w-4/5">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold text-white">Eshrat Jahan Bonna</h1>
            <h1 class="text-2xl font-semibold text-white">
              Fronentd Developer
            </h1>
            <p class="py-6 text-white">
              I am a professional Frontend Developer. I have a strong grip on
              JavaScript, and React. I also have experience with Cloud Services
              like AWS, Firebase, Heroku, etc. I have experience In Responsive
              Web and vanilla Css and its Frame works like Bootstrap, Tailwind.
              I also have 2 years of experience with Graphics design and UI
              design.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;