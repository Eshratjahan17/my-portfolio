import img4 from '../../../assets/images/laptop.png';
import img2 from '../../../assets/images/management.png';
import img1 from '../../../assets/images/manufacture.png';
import img5 from '../../../assets/images/phone.png';
import img3 from '../../../assets/images/relish.png';
import './FeaturedProject.css';

const FeaturedProjects = () => {
  return (
    <div id='featuredProjects'>
      <div className='my-5'>
        <h1 class="text-5xl font-bold text-center pt-5 ">Featured Projects</h1>
        <div class="divider w-1/4 mx-auto ">

        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 pl-7 ">
          <div class="card w-96  shadow-xl ">
            <figure>
              <img src={img1} alt="" />
            </figure>
            <div class="card-body bg-primary text-white ">
              <h2 class="card-title ">All Time Car Parts</h2>
              <p>
                It is car parts manufacture website .Users can Order any Car
                parts. firebase authentication has been used.Admin panel can use
                CRUD operation with MongoDB atlas.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-secondary ">Details</button>
              </div>
            </div>
          </div>
          <div class="card w-96  shadow-xl ">
            <figure>
              <img src={img2} alt="" />
            </figure>
            <div class="card-body bg-primary text-white  ">
              <h2 class="card-title ">SB WareHouse</h2>
              <p>
                It is an warehouse management system . Admins can increase or
                decrease product quantity.To Manage quantity admin must have to
                log in .Firebase authentication has been used for
                authentication.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-secondary ">Details</button>
              </div>
            </div>
          </div>
          <div class="card w-96  shadow-xl ">
            <figure>
              <img src={img3} alt="" />
            </figure>
            <div class="card-body bg-primary text-white  ">
              <h2 class="card-title ">Relish Wedding</h2>
              <p>
                This website is for a Wedding Photographer.It Contains About
                Photographer.His Services and Packages pricing is shown here.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-secondary ">Details</button>
              </div>
            </div>
          </div>
          <div class="card w-96  shadow-xl ">
            <figure>
              <img src={img4} alt="" />
            </figure>
            <div class="card-body bg-primary text-white  ">
              <h2 class="card-title ">Laptop Reviews</h2>
              <p>
                It is a laptop reviwe site .where anyone can see the rewiews of
                other people about specific laptop.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-secondary ">Details</button>
              </div>
            </div>
          </div>
          <div class="card w-96  shadow-xl ">
            <figure>
              <img src={img5} alt="" />
            </figure>
            <div class="card-body bg-primary text-white  ">
              <h2 class="card-title ">Lucky Phone Winner</h2>
              <p>
                It is a contest website.where a phone can be choosen randomly
                for a lucky customer.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-secondary ">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;