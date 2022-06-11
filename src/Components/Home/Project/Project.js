
const Project = ({ project }) => {
 const { name, about, picture } = project;
  return (
    <div>
      <div class="card w-96  shadow-xl h-screen ">
        <figure>
          <img src={picture} alt="" />
        </figure>
        <div class="card-body ">
          <h2 class="card-title ">{name}</h2>
          <p>{about}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-secondary ">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;