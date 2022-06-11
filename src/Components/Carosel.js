
const Carosel = ({image}) => {
  console.log(image);
  return (
    <div>
      <div class="carousel-item border-4 border-secondary">
        <img src={image.img1}  />
      </div>
      <div class="carousel-item">
        <img src={image.img2}  />
      </div>
      <div class="carousel-item">
        <img src={image.img3}  />
      </div>
      <div class="carousel-item">
        <img src={image.img4}  />
      </div>
    </div>
  );
};

export default Carosel;