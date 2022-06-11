import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carosel from "../Carosel";

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
console.log(details.ss);
const screenShorts = details.ss;
console.log(screenShorts);


  return (
    <div className="bg-primary text-white">
      <div>
        <h1 class="text-5xl font-bold text-center pt-5 ">{details.name}</h1>
        <div class="divider w-1/4 mx-auto "></div>
      </div>

      <div class="carousel carousel-center ">
        {
          screenShorts.map((image)=><Carosel
          image={image}
          ></Carosel>)
        }
        {/* {screenShorts.map((img) => (
          <div>
            <div class="carousel-item">
              <img src={img.img1} alt="Pizza" />
            </div>
            <div class="carousel-item">
              <img src={img.img2} alt="Pizza" />
            </div>
            <div class="carousel-item">
              <img src={img.img3} alt="Pizza" />
            </div>
            <div class="carousel-item">
              <img src={img.img4} alt="Pizza" />
            </div>
          </div>
        ))} */}
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