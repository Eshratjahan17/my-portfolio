import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
const [details, setDetails] = useState([]);
 let { id } = useParams();
useEffect(()=>{
  fetch(`http://localhost:5000/projects/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setDetails(data);
    });

},[])
console.log(details);


  return (
    <div className="bg-primary text-white">
      <div>
        <h1 class="text-5xl font-bold text-center pt-5 ">{details.name}</h1>
        <div class="divider w-1/4 mx-auto "></div>
      </div>

      <div class="carousel carousel-center rounded-box">
        <div class="carousel-item">
          <img src={details.picture} alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src={details.picture} alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src={details.picture} alt="Pizza" />
        </div>
        <div class="carousel-item">
          <img src={details.picture} alt="Pizza" />
        </div>
      </div>

      <div>
        <div class="hero min-h-screen ">
          <div class="hero-content flex items-center justify-center ">
            <div>
              <h1 class="text-3xl font-bold">About Project</h1>
              <p class="py-6 text-xl">{details.about}</p>
              <h1 class="text-3xl font-bold">Technologies Used</h1>
              <p class="py-6 text-xl">{details.technologies}</p>
              <button class="btn btn-secondary mr-3">
                <a target="_blank" href={details.live} rel="noreferrer">
                  Live site
                </a>
              </button>
              <button class="btn btn-secondary mr-3">
                <a target="_blank" href={details.github} rel="noreferrer">
                  Github
                </a>
              </button>
              <button class="btn btn-secondary mr-3">
                <a target="_blank" href={details?.server} rel="noreferrer">
                  Server
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;