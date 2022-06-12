
const Skills = () => {
  return (
    <div
      id="skills"
      className="my-8 border-2 lg:w-1/2 sm:w-5/6 mx-auto bg-base-200 rounded-2xl"
    >
      <div>
        <h1 class="text-5xl font-bold text-center pt-5 mb-7  ">My Skills</h1>
      </div>

      <div className="flex flex-col items-center  ">
        <div>
          <h1>JavaScript</h1>
          <progress
            data-aos="fade-right"
            class="progress progress-primary w-96 mb-2 h-4 shadow-lg"
            value="80"
            max="100"
          ></progress>
        </div>
        <div>
          <h1>ReactJs</h1>
          <progress
            data-aos="fade-left"
            class="progress progress-primary w-96 mb-2 h-4 shadow-lg"
            value="90"
            max="100"
          ></progress>
        </div>
        <div>
          <h1>Bootstrap</h1>
          <progress
            data-aos="fade-right"
            class="progress progress-primary w-96 mb-2 h-4 shadow-lg"
            value="80"
            max="100"
          ></progress>
        </div>
        <div>
          <h1>Tailwind</h1>
          <progress
            data-aos="fade-left"
            class="progress progress-primary w-96 mb-2 h-4 shadow-lg"
            value="80"
            max="100"
          ></progress>
        </div>
        <div>
          <h1>Node js</h1>
          <progress
            data-aos="fade-right"
            class="progress progress-primary w-96 mb-2 h-4 shadow-lg"
            value="50"
            max="100"
          ></progress>
        </div>
        <div>
          <h1>Mongo Db</h1>
          <progress
            data-aos="fade-left"
            class="progress progress-primary w-96 mb-2 h-4 shadow-lg"
            value="60"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;