import useData from '../../../Hooks/useData';
import Project from '../Project/Project';
import './FeaturedProject.css';

const FeaturedProjects = () => {
  const [projects]=useData();
  // console.log(projects);
  return (
    <div id="featuredProjects">
      <div className="my-5">
        <h1 class="text-5xl font-bold text-center pt-5 ">Featured Projects</h1>
        <div class="divider w-1/4 mx-auto "></div>

        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 pl-7 ">
          {
            projects.map(project=><Project 
              key={project._id}
              project={project}
             ></Project>)
          }
          
         
          
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;