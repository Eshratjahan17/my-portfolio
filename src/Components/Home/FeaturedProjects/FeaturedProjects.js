import useData from '../../../Hooks/useData';
import Project from '../Project/Project';
import './FeaturedProject.css';

const FeaturedProjects = () => {
  const [projects]=useData();
  // console.log(projects);
  return (
    <div id="featuredProjects" className='w-11/12 mx-auto bg-base-200 rounded-xl py-10 my-7'>
      <div className="my-9 ">
        <h1 class="text-5xl font-bold text-center text-primary pt-5 ">
          Featured Projects
        </h1>
        <div class="divider w-2/5 mx-auto h-2 bg-primary mb-9"></div>

        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 pl-7  ">
          {projects.map((project) => (
            <Project key={project._id} project={project}></Project>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;