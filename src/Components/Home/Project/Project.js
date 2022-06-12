import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
 const { name, about, picture,_id } = project;
 
    const navigate = useNavigate();
 const handleDetails=(id)=>{
  console.log(id);
 navigate(`/projectDetails/${id}`);
  

 }
  return (
    <div data-aos="zoom-in">
      <div class="card w-96 h-full   shadow-xl  border-4  ">
        <figure className="border-b-2 h-2/3">
          <img src={picture}  alt="" />
        </figure>
        <div class="card-body ">
          <h2 class="card-title ">{name}</h2>
          <p>{about}</p>
          <div class="card-actions justify-end">
            <button
              onClick={() => handleDetails(_id)}
              class="btn btn-secondary "
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;