// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import slide1 from '../../assets/images/laptop.png';
// import slide2 from '../../assets/images/management.jpg';
// import slide3 from '../../assets/images/manufacture.png';
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Carosel = ({ img1, img2, img3, img4 }) => {
  // console.log(image);
  // const slide1 = image.img1;
  // const slide2 = image?.img2;
  // const slide3 = image?.img3;
  // const slide4 = image?.img4;
  // console.log(slide1, slide2, slide3, slide4);
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
      </Swiper>
      {/* <div class="carousel-item border border-secondary">
        <img src={image?.img1} />
      </div>
      <div class="carousel-item border border-secondary">
        <img src={image?.img2} />
      </div>
      <div class="carousel-item border border-secondary">
        <img src={image?.img3} />
      </div>
      <div class="carousel-item border border-secondary">
        <img src={image?.img4} />
      </div> */}
    </div>
  );
};

export default Carosel;
