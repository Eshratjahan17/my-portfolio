import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carosel from "../Carosel/Carosel";


const ProjectDetails = () => {
const [details, setDetails] = useState([]);

 let { id } = useParams();
useEffect(()=>{
  fetch(`https://arcane-depths-60174.herokuapp.com/projects/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setDetails(data);
    });

},[])
console.log(details);
const {img1,img2,img3,img4}=details;
console.log(img1, img2, img3, img4);



  return (
    <div className="bg-primary " >
      <div>
        <h1 class="text-5xl font-bold text-center pt-5 text-white ">
          {details.name}
        </h1>
        <div class="divider w-1/4 mx-auto "></div>
      </div>

      <div class="carousel carousel-center ">
        {<Carosel img1={img1} img2={img2} img3={img3} img4={img4}></Carosel>}
      </div>

      <div className="flex justify-center items-center">
        <div class="card w-96 bg-base-200 shadow-xl my-9">
          <div class="card-body">
            <h2 class="card-title">About Project</h2>
            <p>{details.about}</p>
            <h2 class="card-title">Technologies Used</h2>
            <p class=" ">{details.technologies}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-xs btn-secondary mr-3">
                <a target="_blank" href={details.live} rel="noreferrer">
                  Live site
                </a>
              </button>
              <button class="btn btn-xs btn-secondary mr-3">
                <a target="_blank" href={details.github} rel="noreferrer">
                  Github
                </a>
              </button>
              <button class="btn btn-xs btn-secondary mr-3">
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